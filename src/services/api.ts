import axios from "axios";
import { discordAuthConfig } from "../configs/discordAuth";

const { DISCORD_API_URL } = discordAuthConfig;

export const api = axios.create({
  baseURL: DISCORD_API_URL
});
