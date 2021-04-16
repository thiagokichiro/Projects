/**
 * Para criar: name, email senha
 */
interface TechObject {
  title: string;
  experience: number;
}

interface CreaterUserData {
  // opcional
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>;
}

export default function createUser({
  name = "",
  email,
  password,
  techs,
}: CreaterUserData) {
  const user = {
    name,
    email,
    password,
    techs,
  };

  return user;
}
