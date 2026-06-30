I need a PoC to help us fast track with our product development with quality.

# Objective

Establish a Proof of Concept (PoC) to evaluate and implement Vitest as our primary automated unit testing framework. The goal is to create a robust, AI-assisted testing workflow that guarantees high code quality through automated gates before production deployment.


# Scope of Work & Key Deliverables

- Framework Setup: Configure Vitest within our product development environment as the standard unit testing framework.

- AI-Generated Testing Workflow: Explore and define the integration with Claude to automatically generate unit tests for new product code.

- Automated Verification Gate: Design a mechanism to automatically execute and validate Claude’s generated tests. The gate must ensure that the AI-written tests run successfully, pass completely, and accurately validate the code before allowing integration.

- CI/CD Integration & Coverage Gate: Integrate Vitest into our product CI/CD release pipeline. Configure a strict 90%(configurable) code coverage threshold (statements, branches, functions, and lines) that acts as a blocker; builds failing to meet this benchmark must not proceed to production.


# PoC Success Criteria

- Vitest is successfully configured and running tests locally and in the pipeline.

- A demonstrated workflow showing Claude generating a test, the automated gate verifying it, and the test successfully executing.

- The CI/CD pipeline successfully blocks a deployment if code coverage falls below 90%.

Action:
I've already created a sample vite project locally and have manually written a unit test script (counter.test.ts) for a counter.ts.

I want you to first analyze and give me a high level steps involved to deliver this POC