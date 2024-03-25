import { Octokit } from "octokit";
import React from "react";

const OKTCLIENT = new Octokit({
  auth: "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",
});

export { OKTCLIENT };
