import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
