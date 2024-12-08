// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Payright {
    struct Company {
        address companyAddress;
        string companyName;
        uint256 treasury;
    }

    struct Employee {
        string employeeName;
        address employeeAddress;
        address companyAddress;
        uint256 dailyWageWei;
        uint256 lastPayed;
        string activity;
    }

    mapping(address => Company) public companies;
    mapping(address => Employee) public employees;

    event CompanyAdded(address indexed companyAddress, string companyName);
    event CompanyFunded(address indexed companyAddress, uint256 amount);
    event EmployeeAdded(address indexed employeeAddress, address indexed companyAddress, uint256 dailyWageWei, string activity, string employeeName);
    event PayoutMade(address indexed employeeAddress, uint256 amount);
    event EmployeeVerified(address indexed employeeAddress);

    modifier onlyCompanyOwner(address _companyAddress) {
        require(companies[_companyAddress].companyAddress == msg.sender, "Caller is not the company owner");
        _;
    }

    modifier employeeExists(address _employeeAddress) {
        require(employees[_employeeAddress].employeeAddress != address(0), "Employee does not exist");
        _;
    }

    function addCompany(string memory _companyName) public {
        require(bytes(_companyName).length > 0, "Company name cannot be empty");
        require(companies[msg.sender].companyAddress == address(0), "Company already exists");

        companies[msg.sender] = Company({
            companyAddress: msg.sender,
            companyName: _companyName,
            treasury: 0
        });
        emit CompanyAdded(msg.sender, _companyName);
    }


    function fundCompany() public payable onlyCompanyOwner(msg.sender) {
        require(msg.value > 0, "Funding amount must be greater than 0");
        
        companies[msg.sender].treasury += msg.value;
        emit CompanyFunded(msg.sender, msg.value);
    }


    function addEmployee(address _employeeAddress, uint256 _dailyWageWei, string memory _activity, string memory _empName) public onlyCompanyOwner(msg.sender) {
        require(employees[_employeeAddress].employeeAddress == address(0), "Employee already exists");
        require(_dailyWageWei > 0, "Daily wage must be greater than 0");
        require(bytes(_activity).length > 0, "Activity cannot be empty");

        employees[_employeeAddress] = Employee({
            employeeAddress: _employeeAddress,
            companyAddress: msg.sender,
            dailyWageWei: _dailyWageWei,
            lastPayed: block.timestamp,
            activity: _activity,
            employeeName: _empName
        });
        emit EmployeeAdded(_employeeAddress, msg.sender, _dailyWageWei, _activity, _empName);
    }

    
    function payout(address employeeAddress, address owner) public {
        Company storage company = companies[owner];
        Employee storage employee = employees[employeeAddress];
        

        uint256 currentTime = block.timestamp;
        uint256 daysWorked = (currentTime - employee.lastPayed) / (24 * 60 * 60);


        uint256 payoutAmount = daysWorked * employee.dailyWageWei;

   
        require(company.treasury >= payoutAmount, "Insufficient funds in company treasury");
        require(address(this).balance >= payoutAmount, "Insufficient ETH balance in contract");


        company.treasury -= payoutAmount;
        payable(employee.employeeAddress).transfer(payoutAmount);

        employee.lastPayed = currentTime;
        emit PayoutMade(employeeAddress, payoutAmount);
    }

    receive() external payable {}

    function getCompany(address _companyAddress) public view returns (Company memory) {
        require(companies[_companyAddress].companyAddress != address(0), "Company does not exist");
        return companies[_companyAddress];
    }

    function getEmployee(address _employeeAddress) public view returns (Employee memory) {
        require(employees[_employeeAddress].employeeAddress != address(0), "Employee does not exist");
        return employees[_employeeAddress];
    }
}
