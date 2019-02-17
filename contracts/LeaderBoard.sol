pragma solidity ^0.5.0;

import 'openzeppelin-eth/contracts/token/ERC20/ERC20Burnable.sol';
import 'openzeppelin-eth/contracts/token/ERC20/ERC20Mintable.sol';

contract LeaderBoard is ERC20Burnable, ERC20Mintable {
    event Creation(address indexed _from, uint amount, bytes32 name, uint nameId);
    event Mint(address indexed _from, uint amount);
    event Vote(address indexed _from, uint nameId, bytes32 name, uint total);

    struct StatusName {
        address addr;
        uint256 amount;
        bytes32 name;
    }

    uint256 next_nameId = 0;
    mapping(uint => StatusName) public TheBoard;
    mapping(address => bool) public IsInTheBoard;

    function newStatusName(bytes32 name) public {
        require(IsInTheBoard[msg.sender] != true);
        StatusName storage newName = TheBoard[next_nameId];

        newName.addr = msg.sender;
        newName.amount = 0;
        newName.name = name;

        IsInTheBoard[msg.sender] = true;
        emit Creation(newName.addr, newName.amount, newName.name, next_nameId);
        next_nameId ++;
        tokenMint(msg.sender);
    }

    function tokenMint(address nameCreator) private {
        _mint(nameCreator, 10);
        emit Mint(nameCreator, 10);
    }

    function vote(uint nameId) public {
        burn(1);
        TheBoard[nameId].amount ++;
        emit Vote(msg.sender, nameId, TheBoard[nameId].name, TheBoard[nameId].amount);
    }

    function loadStatus(uint256 nameId) public view returns (address addr, uint256 votes, bytes32 name) {
        address addr = TheBoard[nameId].addr;
        uint256 votes = TheBoard[nameId].amount;
        bytes32 name = TheBoard[nameId].name;


    }
}
