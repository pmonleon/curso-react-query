import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
