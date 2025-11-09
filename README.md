# 🚀 Quick Start

### Prerequisites

### node js Setup -- MAC OS

1. **Visit https://nodejs.org/en/download and download and run macOS installer. Keep in mind to install LTS version of node.**
    or
    Run below command in terminal. Version might be different at the time of future download.
    ```bash
    # Download and install nvm:
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash

    # in lieu of restarting the shell
    \. "$HOME/.nvm/nvm.sh"

    # Download and install Node.js, For example version 24:
    nvm install 24

    # Verify the Node.js version:
    node -v # Should print "v24.11.0".

    # Verify npm version:
    npm -v # Should print "11.6.1".
    ```

2. **If node is already installed and install latest version**
    List available Node versions
    ```bash
    nvm ls-remote
    ```

    Install the latest LTS version
    ```bash
    nvm install --lts
    ```

    Use the newly installed version
    ```bash
    nvm use --lts
    ```

    (Optional) Set it as the default
    ```bash
    nvm alias default node
    ```
    
    ✅ Now check:
    ```bash
    node -v
    npm -v
    ```

    🧹 Bonus: Upgrade npm too
    ```bash
    npm install -g npm@latest
    ```

### Visual Studio Code Setup -- MAC OS

1. Visit https://code.visualstudio.com/
2. Download and Install MacOS installer
3. Validate node and npm are installed and ready to be used in VS Code.
    Click on "Terminal: -> "New Terminal"
    ```bash
    node -v
    npm -v
    ```
4. Install Playwright extension "Playwright Test for VSCode"


### Git Installation -- MAC OS

1. Visit https://git-scm.com/install/mac 

2. **Git Installation via Terminal**
    1.  Install homebrew if you don't already have it
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    2. Add Homebrew in PATH
    3. Install Git
    ```bash
    brew install git
    ```
    4. Install MacPorts if you don't already have it
    ```bash
    sudo port install git
    ```
    5. Check Git version
    ```bash
    git -v
    ```

### Playwright Installation -- MAC OS

1. **Execute below command in the VSCode Terminal or native macOS Terminal**
```bash
npm init playwright@latest
```
2. **Complete the installation based on the required configuration**
```bash
Need to install the following packages:
create-playwright@1.17.139
Ok to proceed? (y) y


> npx
> "create-playwright"

Getting started with writing end-to-end tests with Playwright:
Initializing project in '.'
✔ Do you want to use TypeScript or JavaScript? · TypeScript
✔ Where to put your end-to-end tests? · tests
✔ Add a GitHub Actions workflow? (Y/n) · false
✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
```
3. **Upon successful installation, package.json should be created (for reference)**
```bash
{
    "name": "playwrighttutorial",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {},
    "keywords": [],
    "author": "",
    "license": "ISC",
    "type": "commonjs",
    "devDependencies": {
        "@playwright/test": "^1.56.1",
        "@types/node": "^24.10.0"
}
```

### 🧪 Run Playwright Tests via Command Line
1. **Run below command (headless execution across all the configured browsers in playwright.config.ts)**
```bash
npx playwright test
```

2. **To open last HTML report run (automated report generation upon successful test execution):**
```bash
npx playwright show-report
```

3. **Specific browser test exection**
```bash
npx playwright test --project=chromium # Execution on Chrome browser 
npx playwright test --project=firefox # Execution on FF browser
npx playwright test --project=webkit # Execution on Safari browser
```
4. **Headed test execution (for example, Chromium browser)**
```bash
npx playwright test --project=chromium --headed
```

5. **Execute a specific test file**
```bash
npx playwright test example.spec.ts --project=chromium 
```

6. **Execute a specific test from a test file**
```bash
npx playwright test -g "has title" --project=chromium 
```

7. **Another way to run a specific test from a test file, ADD `.only`**
```bash
test.only("test name", async ({page})) => .....    
```

8. **To ignore or skip a test in the file, add `.skip`**
```bash
test.skip("test name", async ({page})) => .....    
```

9. **Run a Test with traceview**
```bash
npx playwright test --project=chromium --trace on # trace configuration can be modified in playwright.config.ts
```

### 🧪 Run Playwright Tests via UI

1. **Run below command**
```bash
npx playwright test --ui
```

### Debug a test
1. **Run below command**
```bash
npx playwright test --project=chromium --debug
```