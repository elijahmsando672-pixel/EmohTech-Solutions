/**
 * In-memory storage used when Microsoft SQL Server is not configured/available.
 * Data is lost on restart — ideal for development and demos.
 * Set ENABLE_MSSQL=true in .env to use persistent SQL Server storage.
 */

const store = {
  messages: [],
  inquiries: [],
};

function now() {
  return new Date().toISOString();
}

export const memoryStorage = {
  saveMessage(data) {
    const record = { id: `msg_${Date.now()}_${store.messages.length + 1}`, ...data, createdAt: now() };
    store.messages.push(record);
    return record;
  },

  saveInquiry(data) {
    const record = { id: `inq_${Date.now()}_${store.inquiries.length + 1}`, ...data, createdAt: now() };
    store.inquiries.push(record);
    return record;
  },

  async listMessages() {
    return [...store.messages].reverse();
  },

  async listInquiries() {
    return [...store.inquiries].reverse();
  },

  // Used by tests to reset state between cases.
  _reset() {
    store.messages = [];
    store.inquiries = [];
  },
};