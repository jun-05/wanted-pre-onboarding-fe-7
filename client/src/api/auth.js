import { client } from "./client";

export const signUp = (user) =>
  client.post("/auth/signup", {
    email: user.email,
    password: user.password,
  });

export const signIn = (user) =>
  client.post("/auth/signin", {
    email: user.email,
    password: user.password,
  });
