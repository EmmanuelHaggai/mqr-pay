// SPDX-License-Identifier: MIT
pragma solidity >=0.8.18 <0.9.0;

contract YourContract {
	address public delegate;
	address public immutable owner;
	string public greeting = "Welcome to MQR Pay!";
	string public sktDetails = "";
	bool public premium = false;
	uint256 public totalCounter = 0;

	mapping(address => uint256) public userGreetingCounter;

	mapping(uint256 => BaseDetails) private baseDetailsMap;
	mapping(uint256 => Employee) private employees;
	mapping(uint256 => Transaction) private transactions;
	mapping(address => uint256) public balances;
	mapping(address => uint256) public staked;

	string public constant tokenName = "MKSH";
	string public constant tokenSymbol = "MKSH";
	uint8 public constant decimals = 18;
	uint256 public totalSupply;

	struct BaseDetails {
		uint256 id;
		string phoneNumber;
		string baseName;
		string baseAddress;
	}

	struct Employee {
		uint256 employeeId;
		string employeeName;
		string employeePosition;
	}

	struct Transaction {
		uint256 transactionId;
		address from;
		address to;
		uint256 amount;
		uint256 timestamp;
	}

	event StkInit(address indexed StkInitializer, string sktDetails);
	event GreetingChange(address indexed greetingSetter, string newGreeting, bool premium, uint256 value);
	event BaseDetailsLogged(uint256 indexed id, string phoneNumber, string baseName, string baseAddress);
	event EmployeeAdded(uint256 employeeId, string employeeName, string employeePosition);
	event TransactionLogged(uint256 indexed transactionId, address from, address to, uint256 amount, uint256 timestamp);
	event EtherForwarded(address indexed _from, address indexed _to, uint256 _amount);
	event Transfer(address indexed from, address indexed to, uint256 value);
	event Stake(address indexed staker, uint256 amount);
	event Unstake(address indexed staker, uint256 amount);

	constructor(address _owner) {
		owner = _owner;
		mint(_owner, 1_000_000 * 10**uint256(decimals));
	}

	modifier isOwner() {
		require(msg.sender == owner, "Not the Owner");
		_;
	}

	function setDelegate(address _delegate) public isOwner {
		delegate = _delegate;
	}

	function mint(address to, uint256 amount) internal {
		require(to != address(0), "Invalid address");
		totalSupply += amount;
		balances[to] += amount;
		emit Transfer(address(0), to, amount);
	}

	function transfer(address to, uint256 amount) public returns (bool) {
		require(balances[msg.sender] >= amount, "Insufficient balance");
		require(to != address(0), "Invalid address");
		balances[msg.sender] -= amount;
		balances[to] += amount;
		emit Transfer(msg.sender, to, amount);
		return true;
	}

	function stake(uint256 amount) public {
		require(balances[msg.sender] >= amount, "Insufficient balance");
		balances[msg.sender] -= amount;
		staked[msg.sender] += amount;
		emit Stake(msg.sender, amount);
	}

	function unstake(uint256 amount) public {
		require(staked[msg.sender] >= amount, "Insufficient staked balance");
		staked[msg.sender] -= amount;
		balances[msg.sender] += amount;
		emit Unstake(msg.sender, amount);
	}

	function InitializeStk(string memory _sktDetails) public payable {
		sktDetails = _sktDetails;
		emit StkInit(msg.sender, _sktDetails);
	}

	function forwardEther(address payable _to) public payable {
		require(msg.value > 0, "No Ether sent to forward");
		(uint256 amount) = msg.value;
		(bool sent, ) = _to.call{ value: amount }("");
		require(sent, "Failed to forward Ether");
		emit EtherForwarded(msg.sender, _to, amount);
	}

	function withdraw() public isOwner {
		(bool success, ) = owner.call{ value: address(this).balance }("");
		require(success, "Failed to send Ether");
	}

	function logBaseDetails(uint256 _id, string memory _phoneNumber, string memory _baseName, string memory _baseAddress) public {
		baseDetailsMap[_id] = BaseDetails(_id, _phoneNumber, _baseName, _baseAddress);
		emit BaseDetailsLogged(_id, _phoneNumber, _baseName, _baseAddress);
	}

	function getBaseDetails(uint256 _id) public view returns (uint256, string memory, string memory, string memory) {
		BaseDetails memory details = baseDetailsMap[_id];
		return (details.id, details.phoneNumber, details.baseName, details.baseAddress);
	}

	function addEmployee(uint256 _employeeId, string memory _employeeName, string memory _employeePosition) public isOwner {
		employees[_employeeId] = Employee(_employeeId, _employeeName, _employeePosition);
		emit EmployeeAdded(_employeeId, _employeeName, _employeePosition);
	}

	function getEmployee(uint256 _employeeId) public view returns (uint256, string memory, string memory) {
		Employee memory employee = employees[_employeeId];
		return (employee.employeeId, employee.employeeName, employee.employeePosition);
	}

	function setGreeting(string memory _newGreeting) public payable {
		greeting = _newGreeting;
		totalCounter += 1;
		userGreetingCounter[msg.sender] += 1;
		premium = msg.value > 0;
		emit GreetingChange(msg.sender, _newGreeting, premium, msg.value);
	}

	function logTransaction(uint256 _transactionId, address _from, address _to, uint256 _amount) public {
		transactions[_transactionId] = Transaction(_transactionId, _from, _to, _amount, block.timestamp);
		emit TransactionLogged(_transactionId, _from, _to, _amount, block.timestamp);
	}

	function getTransaction(uint256 _transactionId) public view returns (uint256, address, address, uint256, uint256) {
		Transaction memory transaction = transactions[_transactionId];
		return (transaction.transactionId, transaction.from, transaction.to, transaction.amount, transaction.timestamp);
	}

	receive() external payable {}
}
