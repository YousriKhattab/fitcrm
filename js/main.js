/**
 * FitCRM - Main JavaScript File
 * Handles localStorage operations, CRUD functionality, and API integration
 */

// ===================================
// Constants and Configuration
// ===================================

const STORAGE_KEY = 'fitcrm_clients';
const WGER_API_BASE = 'https://wger.de/api/v2';

// ===================================
// LocalStorage Management
// ===================================

/**
 * Get all clients from localStorage
 * @returns {Array} Array of client objects
 */
function getClients() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return [];
    }
}

/**
 * Save all clients to localStorage
 * @param {Array} clients - Array of client objects
 */
function saveAllClients(clients) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        showNotification('Failed to save data', 'error');
    }
}

/**
 * Add new client to localStorage
 * @param {Object} clientData - Client information
 * @returns {Object} Saved client with generated ID
 */
function saveClient(clientData) {
    const clients = getClients();
    
    // Generate unique ID using timestamp
    const newClient = {
        id: Date.now().toString(),
        ...clientData,
        createdAt: new Date().toISOString(),
        trainingHistory: []
    };
    
    clients.push(newClient);
    saveAllClients(clients);
    
    return newClient;
}

/**
 * Get single client by ID
 * @param {string} id - Client ID
 * @returns {Object|null} Client object or null if not found
 */
function getClientById(id) {
    const clients = getClients();
    return clients.find(client => client.id === id) || null;
}

/**
 * Update existing client
 * @param {string} id - Client ID
 * @param {Object} updatedData - Updated client information
 * @returns {boolean} Success status
 */
function updateClient(id, updatedData) {
    const clients = getClients();
    const index = clients.findIndex(client => client.id === id);
    
    if (index === -1) {
        console.error('Client not found:', id);
        return false;
    }
    
    // Preserve original ID and createdAt
    clients[index] = {
        ...clients[index],
        ...updatedData,
        id: clients[index].id,
        createdAt: clients[index].createdAt,
        updatedAt: new Date().toISOString()
    };
    
    saveAllClients(clients);
    return true;
}

/**
 * Delete client by ID
 * @param {string} id - Client ID
 * @returns {boolean} Success status
 */
function deleteClient(id) {
    const clients = getClients();
    const filteredClients = clients.filter(client => client.id !== id);
    
    if (filteredClients.length === clients.length) {
        console.error('Client not found:', id);
        return false;
    }
    
    saveAllClients(filteredClients);
    return true;
}

// ===================================
// UI Helper Functions
// ===================================

/**
 * Show notification message
 * @param {string} message - Message to display
 * @param {string} type - Notification type (success, error, info)
 */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification-toast');
    if (existing) {
        existing.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification-toast notification-${type}`;
    notification.textContent = message;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Show confirmation dialog
 * @param {string} message - Confirmation message
 * @returns {boolean} User's choice
 */
function showConfirmDialog(message) {
    return confirm(message);
}

/**
 * Format date for display
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Format fitness goal for display
 * @param {string} goal - Goal value
 * @returns {string} Formatted goal text
 */
function formatGoal(goal) {
    const goalMap = {
        'weight-loss': 'Weight Loss',
        'muscle-gain': 'Muscle Gain',
        'general-fitness': 'General Fitness',
        'endurance': 'Endurance Training',
        'flexibility': 'Flexibility',
        'rehabilitation': 'Rehabilitation'
    };
    return goalMap[goal] || goal;
}

/**
 * Get URL parameter by name
 * @param {string} name - Parameter name
 * @returns {string|null} Parameter value or null
 */
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// ===================================
// Client List Rendering
// ===================================

/**
 * Render client list table
 * @param {Array} clients - Array of clients to display
 */
function renderClientList(clients = null) {
    const tbody = document.getElementById('clientTableBody');
    if (!tbody) return;
    
    const clientsToRender = clients || getClients();
    
    // Clear existing content
    tbody.innerHTML = '';
    
    // Handle empty state
    if (clientsToRender.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 3rem; color: #999;">
                    No clients found. <a href="add-client.html">Add your first client</a>
                </td>
            </tr>
        `;
        return;
    }
    
    // Render each client
    clientsToRender.forEach(client => {
        const row = document.createElement('tr');
        row.className = 'client-row';
        row.dataset.clientId = client.id;
        row.onclick = () => viewClient(client.id);
        
        row.innerHTML = `
            <td data-label="Name">${escapeHtml(client.fullName)}</td>
            <td data-label="Email">${escapeHtml(client.email)}</td>
            <td data-label="Phone">${escapeHtml(client.phone)}</td>
            <td data-label="Fitness Goal">${formatGoal(client.fitnessGoal)}</td>
            <td data-label="Start Date">${client.startDate}</td>
            <td data-label="Actions" onclick="event.stopPropagation()">
                <button class="btn-action btn-edit" onclick="editClient('${client.id}')">Edit</button>
                <button class="btn-action btn-delete" onclick="handleDeleteClient('${client.id}', '${escapeHtml(client.fullName)}')">Delete</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

/**
 * Escape HTML to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Navigate to client detail page
 * @param {string} clientId - Client ID
 */
function viewClient(clientId) {
    window.location.href = `client-detail.html?id=${clientId}`;
}

/**
 * Navigate to edit client page
 * @param {string} clientId - Client ID
 */
function editClient(clientId) {
    window.location.href = `edit-client.html?id=${clientId}`;
}

/**
 * Handle client deletion with confirmation
 * @param {string} clientId - Client ID
 * @param {string} clientName - Client name for confirmation message
 */
function handleDeleteClient(clientId, clientName) {
    if (showConfirmDialog(`Are you sure you want to delete ${clientName}?\n\nThis action cannot be undone.`)) {
        if (deleteClient(clientId)) {
            showNotification(`${clientName} has been deleted`, 'success');
            renderClientList();
        } else {
            showNotification('Failed to delete client', 'error');
        }
    }
}

// ===================================
// Search/Filter Functionality
// ===================================

/**
 * Filter clients by search term
 * @param {string} searchTerm - Search query
 */
function filterClients(searchTerm) {
    const clients = getClients();
    const term = searchTerm.toLowerCase().trim();
    
    if (!term) {
        renderClientList(clients);
        return;
    }
    
    const filtered = clients.filter(client =>
        client.fullName.toLowerCase().includes(term)
    );
    
    renderClientList(filtered);
}

// ===================================
// Wger API Integration
// ===================================

/**
 * Fetch exercises from Wger API
 * @param {number} limit - Number of exercises to fetch
 * @returns {Promise<Array>} Array of exercise objects
 */
async function fetchExercises(limit = 5) {
    try {
        const response = await fetch(
            `${WGER_API_BASE}/exercise/?language=2&limit=${limit}`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            }
        );
        
        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }
        
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error('Error fetching exercises:', error);
        throw error;
    }
}

/**
 * Display exercises in the UI
 * @param {Array} exercises - Array of exercise objects
 * @param {HTMLElement} container - Container element
 */
function displayExercises(exercises, container) {
    if (!container) return;
    
    container.innerHTML = '';
    
    if (exercises.length === 0) {
        container.innerHTML = '<p class="no-data">No exercises available at this time.</p>';
        return;
    }
    
    exercises.forEach((exercise, index) => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        card.innerHTML = `
            <div class="exercise-number">${index + 1}</div>
            <h4>${escapeHtml(exercise.name)}</h4>
            <p class="exercise-description">${stripHtml(exercise.description) || 'No description available'}</p>
        `;
        container.appendChild(card);
    });
}

/**
 * Strip HTML tags from text
 * @param {string} html - HTML string
 * @returns {string} Plain text
 */
function stripHtml(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
}

/**
 * Show loading state
 * @param {HTMLElement} container - Container element
 */
function showLoadingState(container) {
    if (!container) return;
    container.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Loading exercises...</p>
        </div>
    `;
}

/**
 * Show error state
 * @param {HTMLElement} container - Container element
 * @param {string} message - Error message
 */
function showErrorState(container, message) {
    if (!container) return;
    container.innerHTML = `
        <div class="error-state">
            <p class="error-message">❌ ${escapeHtml(message)}</p>
            <button class="btn btn-secondary" onclick="location.reload()">Try Again</button>
        </div>
    `;
}

// ===================================
// Initialization
// ===================================

/**
 * Initialize application based on current page
 */
function initApp() {
    // Add event listeners based on page
    const searchBox = document.getElementById('searchBox');
    if (searchBox) {
        searchBox.addEventListener('input', (e) => filterClients(e.target.value));
    }
    
    // Initialize client list if on clients page
    const clientTableBody = document.getElementById('clientTableBody');
    if (clientTableBody) {
        renderClientList();
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
