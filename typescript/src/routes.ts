import { Request, Response, response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, reponse: Response) {
  const user = createUser({
    name: "Thiago Kichiro",
    email: "kichiro.88@gmail.com",
    password: "132456",
    techs: [
    "ReactJS",
    "Javascript", 
    "HTML", 
    {title: "Java", experience: 50 }],
  });

  console.log(user);

  return response.json({ message: "VAI CORINTHIANS" });
}
