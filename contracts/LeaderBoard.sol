pragma solidity ^0.5.0;

import 'openzeppelin-eth/contracts/token/ERC20/ERC20Burnable.sol';
import 'openzeppelin-eth/contracts/token/ERC20/ERC20Mintable.sol';

contract LeaderBoard is ERC20Burnable, ERC20Mintable {

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

        next_nameId ++;
    }

    function tokenMint() public returns (bool) {
        _mint(msg.sender, 10);
        return true;
    }

    function vote(uint nameId) public {
        require(burnFrom(msg.sender, 1), "Not enough tokens");

        TheBoard[next_nameId].amount ++;
    }
}