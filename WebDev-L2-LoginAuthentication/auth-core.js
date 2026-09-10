// ---------- Shared authentication helpers ----------
// Storage keys
const USERS_KEY = 'auth-users-v1';
const SESSION_KEY = 'auth-session-v1';

// Hash a password with SHA-256 using the browser's SubtleCrypto API.
// Note: client-side hashing like this is for demonstration purposes only —
// a real system must never trust the browser and should hash with a
// server-side algorithm such as bcrypt/argon2, with a per-user salt.
async function hashPassword(password){
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function getUsers(){
  try{
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){
    console.error('Could not read users from storage', e);
    return [];
  }
}

function saveUsers(users){
  try{
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }catch(e){
    console.error('Could not save users to storage', e);
  }
}

function findUser(identifier){
  const normalized = identifier.trim().toLowerCase();
  return getUsers().find(u => u.identifier.toLowerCase() === normalized) || null;
}

function validatePasswordRules(password){
  return password.length >= 8 && /\d/.test(password);
}

function getSession(){
  try{
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  }catch(e){
    return null;
  }
}

function setSession(identifier){
  localStorage.setItem(SESSION_KEY, JSON.stringify({
    identifier,
    loggedInAt: new Date().toISOString()
  }));
}

function clearSession(){
  localStorage.removeItem(SESSION_KEY);
}

// Redirect to login if there is no active session. Call at the very top of
// any protected page, before rendering user-specific content.
function requireSession(){
  const session = getSession();
  if(!session){
    window.location.replace('login.html');
    return null;
  }
  return session;
}
