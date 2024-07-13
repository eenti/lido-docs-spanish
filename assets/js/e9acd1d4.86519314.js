"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2608],{1091:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var i=s(4848),r=s(8453);const o={},t="Validator Ejector",d={id:"gu\xedas/validator-ejector-guide",title:"Validator Ejector",description:"Introduction",source:"@site/docs/gu\xedas/validator-ejector-guide.md",sourceDirName:"gu\xedas",slug:"/gu\xedas/validator-ejector-guide",permalink:"/lido-docs-spanish/gu\xedas/validator-ejector-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/gu\xedas/validator-ejector-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Resumen de Herramientas",permalink:"/lido-docs-spanish/gu\xedas/tooling"},next:{title:"Keys API",permalink:"/lido-docs-spanish/gu\xedas/kapi-guide"}},l={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Nodes",id:"nodes",level:3},{value:"Software",id:"software",level:3},{value:"Using Docker:",id:"using-docker",level:4},{value:"Running directly or using for message encryption:",id:"running-directly-or-using-for-message-encryption",level:4},{value:"Exit Messages",id:"exit-messages",level:2},{value:"Generic Format",id:"generic-format",level:3},{value:"ethdo Output Format",id:"ethdo-output-format",level:3},{value:"Encrypted Format",id:"encrypted-format",level:3},{value:"Encrypting Messages",id:"encrypting-messages",level:2},{value:"Encryption using Ejector - Source Code",id:"encryption-using-ejector---source-code",level:3},{value:"Encryption using Ejector - Docker",id:"encryption-using-ejector---docker",level:3},{value:"Env Variables",id:"env-variables",level:2},{value:"EXECUTION_NODE",id:"execution_node",level:3},{value:"CONSENSUS_NODE",id:"consensus_node",level:3},{value:"LOCATOR_ADDRESS",id:"locator_address",level:3},{value:"STAKING_MODULE_ID",id:"staking_module_id",level:3},{value:"OPERATOR_ID",id:"operator_id",level:3},{value:"MESSAGES_LOCATION",id:"messages_location",level:3},{value:"VALIDATOR_EXIT_WEBHOOK",id:"validator_exit_webhook",level:3},{value:"ORACLE_ADDRESSES_ALLOWLIST",id:"oracle_addresses_allowlist",level:3},{value:"MESSAGES_PASSWORD",id:"messages_password",level:3},{value:"MESSAGES_PASSWORD_FILE",id:"messages_password_file",level:3},{value:"BLOCKS_PRELOAD",id:"blocks_preload",level:3},{value:"HTTP_PORT",id:"http_port",level:3},{value:"RUN_METRICS",id:"run_metrics",level:3},{value:"RUN_HEALTH_CHECK",id:"run_health_check",level:3},{value:"LOGGER_LEVEL",id:"logger_level",level:3},{value:"LOGGER_FORMAT",id:"logger_format",level:3},{value:"LOGGER_SECRETS",id:"logger_secrets",level:3},{value:"DRY_RUN",id:"dry_run",level:3},{value:"Advanced Parameters",id:"advanced-parameters",level:3},{value:"Running",id:"running",level:2},{value:"Source Code",id:"source-code",level:3},{value:"Docker with docker-compose",id:"docker-with-docker-compose",level:3},{value:"Check Ejector is working",id:"check-ejector-is-working",level:2},{value:"What if something is wrong?",id:"what-if-something-is-wrong",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"validator-ejector",children:"Validator Ejector"}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["Ejector is a daemon service which monitors ",(0,i.jsx)(n.a,{href:"https://github.com/lidofinance/lido-dao/blob/feature/shapella-upgrade/contracts/0.8.9/oracle/ValidatorsExitBusOracle.sol",children:"ValidatorsExitBusOracle"})," events and sends out stored exit messages when necessary. It allows Node Operators to generate and sign exit messages ahead of time, which will be sent out by the Ejector when the Protocol requests an exit to be made."]}),"\n",(0,i.jsxs)(n.p,{children:["On start, it loads exit messages from a specified folder in form of individual ",(0,i.jsx)(n.code,{children:".json"})," files and validates their format, structure and signature. Then, it loads events from a configurable amount of latest finalized blocks, checks if exits should be made and after that periodically fetches fresh events."]}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsx)(n.h3,{id:"hardware",children:"Hardware"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"2-core CPU"}),"\n",(0,i.jsx)(n.li,{children:"1GB RAM"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"nodes",children:"Nodes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Execution Node - ",(0,i.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/nodes-and-clients/#node-types",children:"Full node required"})]}),"\n",(0,i.jsx)(n.li,{children:"Consensus Node"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"software",children:"Software"}),"\n",(0,i.jsx)(n.h4,{id:"using-docker",children:"Using Docker:"}),"\n",(0,i.jsx)(n.p,{children:"Docker + docker-compose."}),"\n",(0,i.jsx)(n.h4,{id:"running-directly-or-using-for-message-encryption",children:"Running directly or using for message encryption:"}),"\n",(0,i.jsx)(n.p,{children:"Node.js 16."}),"\n",(0,i.jsx)(n.h2,{id:"exit-messages",children:"Exit Messages"}),"\n",(0,i.jsx)(n.p,{children:"Ejector loads and validates exit messages on start. This means that any changes to the messages folder (eg new exit messages) require a restart of the app to be picked up."}),"\n",(0,i.jsx)(n.p,{children:"Ejector accepts messages in three formats:"}),"\n",(0,i.jsx)(n.h3,{id:"generic-format",children:"Generic Format"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "message": { "epoch": "123", "validator_index": "123" },\n  "signature": "0x123"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"ethdo-output-format",children:"ethdo Output Format"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "exit": {\n    "message": { "epoch": "123", "validator_index": "123" },\n    "signature": "0x123"\n  },\n  "fork_version": "0x123"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"encrypted-format",children:"Encrypted Format"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "version": 4,\n  "uuid": "123abc-123abc-123abc",\n  "path": "",\n  "pubkey": "",\n  "crypto": {\n    "kdf": {\n      "function": "pbkdf2",\n      "params": {\n        "dklen": 123,\n        "c": 123,\n        "prf": "hmac-sha256",\n        "salt": "123abc"\n      },\n      "message": ""\n    },\n    "checksum": {\n      "function": "sha256",\n      "params": {},\n      "message": "123abc"\n    },\n    "cipher": {\n      "function": "aes-128-ctr",\n      "params": { "iv": "123abc" },\n      "message": "123abc"\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"encrypting-messages",children:"Encrypting Messages"}),"\n",(0,i.jsxs)(n.p,{children:["It is highly advised that after exit message are generated and signed, they should be encrypted for storage safety. Ejector will decrypt files on start by looking up the password in ",(0,i.jsx)(n.code,{children:"MESSAGES_PASSWORD"})," environment variable."]}),"\n",(0,i.jsxs)(n.p,{children:["Exit messages are encrypted and decrypted by Ejector following the ",(0,i.jsx)(n.a,{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2335.md",children:"EIP-2335"})," spec."]}),"\n",(0,i.jsx)(n.p,{children:"Ejector is bundled with a small, easy to use encryption script."}),"\n",(0,i.jsx)(n.h3,{id:"encryption-using-ejector---source-code",children:"Encryption using Ejector - Source Code"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Clone repository:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/lidofinance/validator-ejector.git\ncd validator-ejector\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Create ",(0,i.jsx)(n.code,{children:".env"})," file with encryption password or pass before the command:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"MESSAGES_PASSWORD=password\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Copy JSON exit message files to ",(0,i.jsx)(n.code,{children:"encryptor/input"})]}),"\n",(0,i.jsxs)(n.li,{children:["Run ",(0,i.jsx)(n.code,{children:"yarn & yarn encrypt"})]}),"\n",(0,i.jsxs)(n.li,{children:["Encrypted exit message files will be saved to ",(0,i.jsx)(n.code,{children:"encryptor/output"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"encryption-using-ejector---docker",children:"Encryption using Ejector - Docker"}),"\n",(0,i.jsx)(n.p,{children:"Ejector is bundled with encryptor script inside, so you can run it using the same Docker image:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run \\\n\t\t-e MESSAGES_PASSWORD=secret \\\n\t\t-v /full/path/to/input:/app/encryptor/input/ \\\n\t\t-v /full/path/to/output:/app/encryptor/output/ \\\n\t\tlidofinance/validator-ejector@sha256:<hash> \\\n\t\tnode /app/dist/encryptor/encrypt.js\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can find a recommended version's hash ",(0,i.jsx)(n.a,{href:"/gu%C3%ADas/tooling",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"For platforms with a different architecture but with emulation/transpilation support eg macOS on M processors, additionally specify:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--platform linux/amd64\n"})}),"\n",(0,i.jsx)(n.h2,{id:"env-variables",children:"Env Variables"}),"\n",(0,i.jsx)(n.h3,{id:"execution_node",children:"EXECUTION_NODE"}),"\n",(0,i.jsx)(n.p,{children:"Address of the Execution Node."}),"\n",(0,i.jsx)(n.h3,{id:"consensus_node",children:"CONSENSUS_NODE"}),"\n",(0,i.jsx)(n.p,{children:"Address of the Consensus Node."}),"\n",(0,i.jsx)(n.h3,{id:"locator_address",children:"LOCATOR_ADDRESS"}),"\n",(0,i.jsxs)(n.p,{children:["Address of the ",(0,i.jsx)(n.a,{href:"https://github.com/lidofinance/lido-dao/blob/feature/shapella-upgrade/contracts/0.8.9/LidoLocator.sol",children:"LidoLocator"})," contract: ",(0,i.jsx)(n.a,{href:"https://docs.lido.fi/deployed-contracts/holesky",children:"Hole\u0161ky"})," / ",(0,i.jsx)(n.a,{href:"https://docs.lido.fi/deployed-contracts/",children:"Mainnet"})]}),"\n",(0,i.jsx)(n.h3,{id:"staking_module_id",children:"STAKING_MODULE_ID"}),"\n",(0,i.jsxs)(n.p,{children:["ID of the ",(0,i.jsx)(n.a,{href:"https://github.com/lidofinance/lido-dao/blob/feature/shapella-upgrade/contracts/0.8.9/StakingRouter.sol",children:"StakingRouter"})," contract module."]}),"\n",(0,i.jsxs)(n.p,{children:["Currently, it has only one module (",(0,i.jsx)(n.a,{href:"https://github.com/lidofinance/lido-dao/blob/feature/shapella-upgrade/contracts/0.4.24/nos/NodeOperatorsRegistry.sol",children:"NodeOperatorsRegistry"}),"), it's id is ",(0,i.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"operator_id",children:"OPERATOR_ID"}),"\n",(0,i.jsxs)(n.p,{children:["You can find it on the Operators Dashboard (",(0,i.jsx)(n.code,{children:"#123"})," on the operator card): ",(0,i.jsx)(n.a,{href:"https://operators-holesky.testnet.fi",children:"Hole\u0161ky"})," / ",(0,i.jsx)(n.a,{href:"https://operators.lido.fi",children:"Mainnet"})]}),"\n",(0,i.jsx)(n.h3,{id:"messages_location",children:"MESSAGES_LOCATION"}),"\n",(0,i.jsxs)(n.p,{children:["Location from which to load ",(0,i.jsx)(n.code,{children:".json"})," exit messages from."]}),"\n",(0,i.jsx)(n.p,{children:"When set, messages mode will be activated. Not needed if you are using the Ejector in webhook mode."}),"\n",(0,i.jsxs)(n.p,{children:["For example, ",(0,i.jsx)(n.code,{children:"/messages"})," in Docker or simply ",(0,i.jsx)(n.code,{children:"messages"})," if running directly for local files."]}),"\n",(0,i.jsx)(n.p,{children:"External storage bucket url is also supported for AWS S3 and Google Cloud Storage:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"s3://"})," for S3"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gs://"})," for GCS"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Authentication setup: ",(0,i.jsx)(n.a,{href:"https://cloud.google.com/docs/authentication/application-default-credentials#attached-sa",children:"GCS"}),", ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-credentials-node.html",children:"S3"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"validator_exit_webhook",children:"VALIDATOR_EXIT_WEBHOOK"}),"\n",(0,i.jsx)(n.p,{children:"Endpoint to fetch when an exit has to be made. Allows to implement JIT approach by offloading exiting logic to an external service and using the Ejector as a secure exit events reader."}),"\n",(0,i.jsx)(n.p,{children:"When set, webhook mode will be activated. Not needed if you are using the Ejector in messages mode."}),"\n",(0,i.jsx)(n.p,{children:"On the endpoint, JSON will be POSTed with the following structure:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "validatorIndex": "123",\n  "validatorPubkey": "0x123"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"200 response will be counted as a successful exit, non-200 as a fail."}),"\n",(0,i.jsx)(n.h3,{id:"oracle_addresses_allowlist",children:"ORACLE_ADDRESSES_ALLOWLIST"}),"\n",(0,i.jsx)(n.p,{children:"JSON array of Lido Oracle addresses, from which only report transactions will be accepted."}),"\n",(0,i.jsxs)(n.p,{children:["You can get a list from Etherscan on ",(0,i.jsx)(n.a,{href:"https://holesky.etherscan.io/address/0xa067FC95c22D51c3bC35fd4BE37414Ee8cc890d2#readContract#F16",children:"Hole\u0161ky"})," or ",(0,i.jsx)(n.a,{href:"https://etherscan.io/address/0xD624B08C83bAECF0807Dd2c6880C3154a5F0B288#readContract#F16",children:"Mainnet"})]}),"\n",(0,i.jsx)(n.p,{children:"Format:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'["0x123", "0x123"]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"messages_password",children:"MESSAGES_PASSWORD"}),"\n",(0,i.jsx)(n.p,{children:"Password to decrypt encrypted exit messages with on app start."}),"\n",(0,i.jsx)(n.h3,{id:"messages_password_file",children:"MESSAGES_PASSWORD_FILE"}),"\n",(0,i.jsxs)(n.p,{children:["Alternative to ",(0,i.jsx)(n.code,{children:"MESSAGES_PASSWORD"}),". Path to a file with password inside to decrypt exit messages with. If used, MESSAGES_PASSWORD (not MESSAGES_PASSWORD_FILE) needs to be added to LOGGER_SECRETS in order to be sanitized"]}),"\n",(0,i.jsx)(n.h3,{id:"blocks_preload",children:"BLOCKS_PRELOAD"}),"\n",(0,i.jsx)(n.p,{children:"Amount of blocks to load events from on start."}),"\n",(0,i.jsx)(n.p,{children:"Suggested to include in your env variables, but to be left at default 50000 value (~7 days of blocks)."}),"\n",(0,i.jsx)(n.p,{children:"In case your Ejector will be down due to an emergency, this value can be tweaked to let the Ejector load a higher amount of blocks on start."}),"\n",(0,i.jsx)(n.h3,{id:"http_port",children:"HTTP_PORT"}),"\n",(0,i.jsx)(n.p,{children:"Port for serving metrics and a health check endpoint. Default is 8989."}),"\n",(0,i.jsx)(n.h3,{id:"run_metrics",children:"RUN_METRICS"}),"\n",(0,i.jsxs)(n.p,{children:["Enable with ",(0,i.jsx)(n.code,{children:"true"})," to serve Prometheus metrics: ",(0,i.jsx)(n.a,{href:"https://github.com/lidofinance/validator-ejector#metrics",children:"full list"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Will be served on ",(0,i.jsx)(n.code,{children:"HOST:$HTTP_PORT/metrics"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Highly advised for monitoring and alerting."}),"\n",(0,i.jsx)(n.h3,{id:"run_health_check",children:"RUN_HEALTH_CHECK"}),"\n",(0,i.jsxs)(n.p,{children:["Enabled by default, disabled with ",(0,i.jsx)(n.code,{children:"false"}),". Highly recommended to monitor this endpoint."]}),"\n",(0,i.jsxs)(n.p,{children:["Will be served on ",(0,i.jsx)(n.code,{children:"HOST:$HTTP_PORT/health"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"logger_level",children:"LOGGER_LEVEL"}),"\n",(0,i.jsxs)(n.p,{children:["Recommended to set to ",(0,i.jsx)(n.code,{children:"info"})," (default), can be changed to ",(0,i.jsx)(n.code,{children:"debug"})," in case of issues for easier debugging."]}),"\n",(0,i.jsx)(n.h3,{id:"logger_format",children:"LOGGER_FORMAT"}),"\n",(0,i.jsxs)(n.p,{children:["Format of logs, ",(0,i.jsx)(n.code,{children:"simple"})," by default, but can be set to ",(0,i.jsx)(n.code,{children:"json"})," to be easily parseable by ",(0,i.jsx)(n.a,{href:"https://github.com/grafana/loki",children:"Loki"}),", for example."]}),"\n",(0,i.jsx)(n.h3,{id:"logger_secrets",children:"LOGGER_SECRETS"}),"\n",(0,i.jsx)(n.p,{children:"Env var names or exact values which should be replaced in logs, in JSON array of strings format."}),"\n",(0,i.jsx)(n.p,{children:"Advised to include your MESSAGES_PASSWORD, EXECUTION_NODE, and MESSAGES_PASSWORD:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'["MESSAGES_PASSWORD", "EXECUTION_NODE", "CONSENSUS_NODE"]\n'})}),"\n",(0,i.jsx)(n.p,{children:"Notice: make sure quotes are copied correctly if copying this sample."}),"\n",(0,i.jsx)(n.h3,{id:"dry_run",children:"DRY_RUN"}),"\n",(0,i.jsxs)(n.p,{children:["Allows to test the app with ",(0,i.jsx)(n.code,{children:"true"})," without actually sending out exit messages."]}),"\n",(0,i.jsx)(n.p,{children:"Use with caution!"}),"\n",(0,i.jsxs)(n.p,{children:["Make sure to set to ",(0,i.jsx)(n.code,{children:"false"})," or completely leave it out in production."]}),"\n",(0,i.jsx)(n.h3,{id:"advanced-parameters",children:"Advanced Parameters"}),"\n",(0,i.jsx)(n.p,{children:"Please don't use unless suggested by a Lido contributor."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"BLOCKS_LOOP - 900 (3 hours of blocks) - Amount of blocks Ejector looks behind on wake in polling jobs."}),"\n",(0,i.jsx)(n.li,{children:"JOB_INTERVAL - 384000 (1 epoch) - Time for which Ejector sleeps between jobs."}),"\n",(0,i.jsxs)(n.li,{children:["DISABLE_SECURITY_DONT_USE_IN_PRODUCTION - false - Set to ",(0,i.jsx)(n.code,{children:"true"})," to skip security checks, for example if Exit Bus Consensus contract was changed after the Ejector was unable to exit validators eg was switched off."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"running",children:"Running"}),"\n",(0,i.jsx)(n.h3,{id:"source-code",children:"Source Code"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Clone repository:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/lidofinance/validator-ejector.git\ncd validator-ejector\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Create exit messages folder, for example locally ",(0,i.jsx)(n.code,{children:"mkdir messages"})]}),"\n",(0,i.jsx)(n.li,{children:"Put exit message files in the messages folder."}),"\n",(0,i.jsxs)(n.li,{children:["Copy env sample file ",(0,i.jsx)(n.code,{children:"cp sample.env .env"})]}),"\n",(0,i.jsxs)(n.li,{children:["Fill environment variables in ",(0,i.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,i.jsx)(n.li,{children:"Run"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn\nyarn build\nyarn start\n"})}),"\n",(0,i.jsx)(n.h3,{id:"docker-with-docker-compose",children:"Docker with docker-compose"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create root folder for Ejector, cd into that folder."}),"\n",(0,i.jsxs)(n.li,{children:["Create exit messages folder ",(0,i.jsx)(n.code,{children:"mkdir messages"})]}),"\n",(0,i.jsx)(n.li,{children:"Put exit message files in messages folder."}),"\n",(0,i.jsxs)(n.li,{children:["Copy env file ",(0,i.jsx)(n.code,{children:"cp sample.env .env"})]}),"\n",(0,i.jsx)(n.li,{children:"Fill environment variables in .env file."}),"\n",(0,i.jsxs)(n.li,{children:["Create ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," file using the following template:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/lidofinance/validator-ejector/blob/develop/docker-compose.yml",children:"https://github.com/lidofinance/validator-ejector/blob/develop/docker-compose.yml"})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["Run ",(0,i.jsx)(n.code,{children:"docker-compose up"})," or ",(0,i.jsx)(n.code,{children:"docker-compose up -d"})," to start in detached mode (in background)."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"check-ejector-is-working",children:"Check Ejector is working"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Ensure there are no errors in logs and no restarts."}),"\n",(0,i.jsx)(n.li,{children:"Verify that config logged on start is correct in logs."}),"\n",(0,i.jsxs)(n.li,{children:["If you have put presigned messages in the messages folder, make sure Loaded Messages count is greater than ",(0,i.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure you can see ",(0,i.jsx)(n.code,{children:"Job started"})," and ",(0,i.jsx)(n.code,{children:"Job finished"})," lines in logs."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example of correct operation logs:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'info: Application started, version 1.0.0 {"EXECUTION_NODE":"<secret>","CONSENSUS_NODE":"<secret>","LOCATOR_ADDRESS":"0x123","STAKING_MODULE_ID":"1","OPERATOR_ID":"0","MESSAGES_LOCATION":"messages","ORACLE_ADDRESSES_ALLOWLIST":["0x123"],"MESSAGES_PASSWORD":"<secret>","BLOCKS_PRELOAD":190000,"BLOCKS_LOOP":64,"JOB_INTERVAL":384000,"HTTP_PORT":8989,"RUN_METRICS":true,"RUN_HEALTH_CHECK":true,"DRY_RUN":false}\ninfo: Loading messages from messages\ninfo: Loaded 123 messages\ninfo: Validating messages\ninfo: Starting, searching only for requests for operator 0\ninfo: Loading initial events for 190000 last blocks\ninfo: Job started {"operatorId":"0","stakingModuleId":"1","loadedMessages":123}\ninfo: Resolved Exit Bus contract address using the Locator {"exitBusAddress":"0x123"}\ninfo: Resolved Consensus contract address {"consensusAddress":"0x123"}\ninfo: Fetched the latest block from EL {"latestBlock":12345}\ninfo: Fetching request events from the Exit Bus {"eventsNumber":190000,"fromBlock":12345,"toBlock":12345}\ninfo: Loaded ValidatorExitRequest events {"amount":0}\ninfo: Handling ejection requests {"amount":0}\ninfo: Job finished\ninfo: Starting 384 seconds polling for 64 last blocks\n'})}),"\n",(0,i.jsx)(n.h2,{id:"what-if-something-is-wrong",children:"What if something is wrong?"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Make sure configuration is correct."}),"\n",(0,i.jsx)(n.li,{children:"Make sure you are on the recommended Docker image SHA hash or version if running directly."}),"\n",(0,i.jsx)(n.li,{children:"Check if Nodes are synced and are working correctly."}),"\n",(0,i.jsx)(n.li,{children:"Restart the app."}),"\n",(0,i.jsx)(n.li,{children:"Start the app with LOGGER_LEVEL=debug env variable and contact Lido devs with logs to investigate the problem."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,i.jsxs)(n.p,{children:["Validator Ejector GitHub Repository (Open Source)\n",(0,i.jsx)(n.a,{href:"https://github.com/lidofinance/validator-ejector",children:"https://github.com/lidofinance/validator-ejector"})]}),"\n",(0,i.jsxs)(n.p,{children:["Lido Withdrawals: Automating Validator Exits - parts can now be outdated\n",(0,i.jsx)(n.a,{href:"https://hackmd.io/@lido/BkxRxAr-o",children:"https://hackmd.io/@lido/BkxRxAr-o"})]}),"\n",(0,i.jsxs)(n.p,{children:["Ejector Logic Spec - parts can now be outdated\n",(0,i.jsx)(n.a,{href:"https://hackmd.io/@lido/r1KZ4YNdj",children:"https://hackmd.io/@lido/r1KZ4YNdj"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var i=s(6540);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);