/**
 * Service to handle AI Visitor Lounge messages
 */

const MESSAGE_STORAGE_KEY = "aiVisitorMessages";

/**
 * Retrieves all messages from localStorage
 * @returns {Array} Array of message objects
 */
export const getMessages = () => {
  try {
    const messages = localStorage.getItem(MESSAGE_STORAGE_KEY);
    return messages ? JSON.parse(messages) : [];
  } catch (error) {
    console.error("Failed to retrieve messages:", error);
    return [];
  }
};

/**
 * Saves a new message to localStorage
 * @param {Object} message - The message object to save
 * @returns {boolean} Success status
 */
export const saveMessage = (message) => {
  try {
    const messages = getMessages();
    messages.push({
      ...message,
      id: Date.now().toString(), // Add a unique ID
      timestamp: message.timestamp || new Date().toISOString(),
    });

    localStorage.setItem(MESSAGE_STORAGE_KEY, JSON.stringify(messages));
    return true;
  } catch (error) {
    console.error("Failed to save message:", error);
    return false;
  }
};

/**
 * Clears all messages from storage
 * @returns {boolean} Success status
 */
export const clearMessages = () => {
  try {
    localStorage.removeItem(MESSAGE_STORAGE_KEY);
    return true;
  } catch (error) {
    console.error("Failed to clear messages:", error);
    return false;
  }
};

/**
 * In a production environment, you would replace the localStorage
 * implementation with actual API calls to your backend server.
 *
 * Example:
 *
 * export const saveMessage = async (message) => {
 *   try {
 *     const response = await fetch('/api/messages', {
 *       method: 'POST',
 *       headers: {
 *         'Content-Type': 'application/json',
 *       },
 *       body: JSON.stringify(message),
 *     });
 *     return response.ok;
 *   } catch (error) {
 *     console.error('Failed to save message:', error);
 *     return false;
 *   }
 * };
 */
