# Swagger-api-request.

<details><summary><b>Output data</b></summary>

```sh
[
{
    id: 4,
    category: { id: 1, name: 'Dogs' },
    name: 'Dog 1',
    photoUrls: [ 'url1', 'url2' ],
    tags: [ [Object], [Object] ],
    status: 'available'
},
{
    id: 7,
    category: { id: 4, name: 'Lions' },
    name: 'Lion 1',
    photoUrls: [ 'url1', 'url2' ],
    tags: [ [Object], [Object] ],
    status: 'available'
},
{
    id: 8,
    category: { id: 4, name: 'Lions' },
    name: 'Lion 2',
    photoUrls: [ 'url1', 'url2' ],
    tags: [ [Object], [Object] ],
    status: 'available'
}, 
... other ]
```
</details>

### Installation

Clone the repository using the command below :
```bash
git clone https://github.com/BosovPN/swagger-api-request.git
```

Move into directory where we have the project files 
```bash
cd swagger-api-request
```

Install the dependencies
```bash
npm install
```

### Running the Project in dev mode (with automatically reboot when files changed)
```bash
npm run dev
```

### Running the Project
```bash
npx ts-node src/index.ts
```