import { Octokit } from "octokit";
import React from "react";

const OKTCLIENT = new Octokit({
  auth: "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",
});

export { OKTCLIENT };
