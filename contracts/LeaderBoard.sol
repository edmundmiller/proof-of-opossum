pragma solidity ^0.5.0;

import 'openzeppelin-eth/contracts/token/ERC20/ERC20Burnable.sol';
import 'openzeppelin-eth/contracts/token/ERC20/ERC20Mintable.sol';

contract LeaderBoard is ERC20Burnable, ERC20Mintable {
    event Creation(address indexed _from, uint amount, bytes32 name, uint Id);
    event Mint(address indexed _from, uint amount);
    event Vote(address indexed _from, uint nameId, bytes32 name, uint total);

    struct StatusName {
        address addr;
        uint amount;
        bytes32 name;
    }

    uint next_nameId = 0;
    mapping(uint => StatusName) public TheBoard;

    function newStatusName(bytes32 name) public {
        StatusName storage newName = TheBoard[next_nameId];

        newName.addr = msg.sender;
        newName.amount = 0;
        newName.name = name;

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
}
