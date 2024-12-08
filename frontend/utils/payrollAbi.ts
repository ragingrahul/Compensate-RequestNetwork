const abi=[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_companyName",
				"type": "string"
			}
		],
		"name": "addCompany",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_employeeAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_dailyWageWei",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_activity",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_empName",
				"type": "string"
			}
		],
		"name": "addEmployee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "companyAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "companyName",
				"type": "string"
			}
		],
		"name": "CompanyAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "companyAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "CompanyFunded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "employeeAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "companyAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "dailyWageWei",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "activity",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "employeeName",
				"type": "string"
			}
		],
		"name": "EmployeeAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "employeeAddress",
				"type": "address"
			}
		],
		"name": "EmployeeVerified",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "fundCompany",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "employeeAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "payout",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "employeeAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "PayoutMade",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "companies",
		"outputs": [
			{
				"internalType": "address",
				"name": "companyAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "companyName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "treasury",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "employees",
		"outputs": [
			{
				"internalType": "string",
				"name": "employeeName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "employeeAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "companyAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "dailyWageWei",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastPayed",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "activity",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_companyAddress",
				"type": "address"
			}
		],
		"name": "getCompany",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "companyAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "companyName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "treasury",
						"type": "uint256"
					}
				],
				"internalType": "struct Payright.Company",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_employeeAddress",
				"type": "address"
			}
		],
		"name": "getEmployee",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "employeeName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "employeeAddress",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "companyAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "dailyWageWei",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "lastPayed",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "activity",
						"type": "string"
					}
				],
				"internalType": "struct Payright.Employee",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
] as const

export default abi