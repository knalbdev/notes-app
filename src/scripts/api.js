const BASE_URL = 'https://notes-api.dicoding.dev/v2';

const getNotes = async () => {
  const response = await fetch(`${BASE_URL}/notes`);
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return Promise.reject(responseJson.message);
  }
  return Promise.resolve(responseJson.data);
};

const createNote = async (note) => {
  const response = await fetch(`${BASE_URL}/notes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note),
  });
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return Promise.reject(responseJson.message);
  }
  return Promise.resolve(responseJson.data);
};

const deleteNote = async (id) => {
  const response = await fetch(`${BASE_URL}/notes/${id}`, { method: 'DELETE' });
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return Promise.reject(responseJson.message);
  }
  return Promise.resolve(responseJson.message);
};

export { getNotes, createNote, deleteNote };
