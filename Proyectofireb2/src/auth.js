import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { app } from './firebaseConfig';

const auth = getAuth(app);

export const registrarUsuario = async (correo, contraseña) => {
  try {
    const credencialUsuario = await createUserWithEmailAndPassword(auth, correo, contraseña);
    return credencialUsuario;
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    throw error;
  }
};

export const iniciarSesion = async (correo, contraseña) => {
  try {
    const credencialUsuario = await signInWithEmailAndPassword(auth, correo, contraseña);
    return credencialUsuario;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
};

export const cerrarSesion = async () => {
  try {
    await signOut(auth);
    console.log("Sesión cerrada correctamente");
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    throw error;
  }
};
