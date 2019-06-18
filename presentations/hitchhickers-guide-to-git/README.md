# Hitchhicker's Guide to Git

This presentation uses a tool called [MDX Deck](https://github.com/jxnblk/mdx-deck)
to display the presentation.

To run the presentation locally, you'll need Node and Yarn
installed. Then you can run the following commands from
the root of this repository:

### Install Node and Yarn

You can follow the instructions laid out here: [Node]()
and [Yarn](), to download directly. Alternatively it can
use the respective command line application and package
managers.

#### Package Managers

[Homebrew on OSX](https://brew.sh/)

[Chocolatey on Windows](https://chocolatey.org/install)

##### Install Node and Yarn

_on OSX (using Homebrew)_

```bash
brew install yarn
```

_on Windows (using Chocolatey)_

```pwsh
choco install nodejs-lts -y
choco install yarn
```

### Run the presentation

_on OSX in Terminal_

```bash
cd presentations/what-about-git
yarn install
yarn start
```

_on Windows in Powershell_

```pwsh
cd .\presentations\what-about-git
yarn install
yarn start
```

### View the presentation

The tool used will try to open your browser for you,
or you can navigate directly to
[http://localhost:8080](http://localhost:8080)
