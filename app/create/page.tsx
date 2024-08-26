"use client";
import { title } from "@/components/primitives";
import { Fragment, useState } from "react";
import { Input } from "@nextui-org/react";
import {Accordion, AccordionItem, Select, SelectItem} from "@nextui-org/react";

import { FaLeaf, FaFireAlt, FaPauseCircle, FaExchangeAlt, FaLightbulb } from "react-icons/fa";

export default function AboutPage() {
  // Creating the variables for our form inputs.
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [totalSupply, setTotalSupply] = useState(0);
  const [chain, setChain] = useState({key: "ethereum", label: "Ethereum", value: "1"});
  const [isUpgradable, setIsUpgradable] = useState(false);

  // Creating the list of chains available.
  const chains = [
    {key: "arbitrum", label: "Arbitrum", value: "42161"},
    {key: "avalanche", label: "Avalanche", value: "43114"},
    {key: "base", label: "Base", value: "8453"},
    {key: "blast", label: "Blast", value: "81457"},
    {key: "bsc", label: "Binance Smartchain", value: "56"},
    {key: "ethereum", label: "Ethereum", value: "1"},
    {key: "fantom", label: "Fantom", value: "250"},
    {key: "gnosis", label: "Gnosis", value: "100"},
    {key: "optimism", label: "Optimism", value: "10"},
    {key: "polygon", label: "Polygon", value: "137"},
    {key: "neon", label: "Neon", value: "245022934"},
  ];

  // Function to return the current date in (August 26, 2024) format.
  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString("en-US", {month: "long", day: "numeric", year: "numeric"});
  }

  // Contract Template.
  const baseContractTemplate = `
// SPDX-License-Identifier: MIT
// Generated on ${getCurrentDate()} with Tokenkhana and OpenZeppelin Contracts.
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ${name ? name : "{{tokenName}}"} is ERC20 {
  constructor() ERC20("${name ? name : "{{tokenName}}"}", "${symbol ? symbol : "{{tokenSymbol}}"}") ${!totalSupply ? "{}" : `{
    _mint(msg.sender, ${totalSupply} * 10 ** decimals());
  }`}
}`.trim();

  // Line break handler.
  const preserveLinebreaks = (str: string) => {
    return str.split('\n').map((line, index, array) => (
      <Fragment key={index}>
        {line.replace(/^\s+/, (match) => '\u00A0'.repeat(match.length))}
        {index < array.length - 1 && <br />}
      </Fragment>
    ));
  }

  // Creating the safety checks for our forms.
  const isValidForSubmission = () => {
    return name && symbol && totalSupply && totalSupply > 0;
  }

  const supplyIsValid = () => {
    return totalSupply > 0;
  }

  const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  // Creating the submit function (pending)

  return (
    // Main Page Section
    <div className="w-full h-full text-center mt-5">
      {/* Page Title */}
      <h1 className={title({ size: "sm" })}>Token Configurator</h1>
      {/* Splitting the screen into two parts: the form and the code preview which is only visible on larger screens. */}
      <div className="flex flex-col lg:flex-row gap-8 w-full mt-10">
        {/* Creating the form wrapper*/}
        <form className="w-full">
          {/* Name and Symbol Inputs of the Token */}
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input isRequired type="text" label="Token Name" description="Cannot be updated in the future." placeholder="MyToken" size="md" className="text-left" value={name} onChange={e => setName(e.target.value)} />
            <Input isRequired type="text" label="Token Symbol" description="Cannot be updated in the future." placeholder="TKN" size="md" className="text-left" value={symbol} onChange={e => setSymbol(e.target.value)} />
          </div>

          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-5">
            {/* Setting the supply and ensuring the supply cannot be a negative number. */}
            <Input isRequired type="number" label="Total Supply" placeholder="MyToken" size="md" className="text-left" description="Minted to your wallet on creation." value={totalSupply.toString()} onChange={e => setTotalSupply(Number(e.target.value) > 0 ? Number(e.target.value) : 0)} />

            {/* Selecting the Chain */}
            <Select isRequired label="Chain" placeholder="Select an option" size="md" description="Select chain to deploy your token." className="text-left">
              {chains.map((chain) => (
                <SelectItem key={chain.key} value={chain.value}>{chain.label}</SelectItem>
              ))}
            </Select>
          </div>

          <div className="w-full text-center my-8">
            <h1 className="text-center tracking-light inline font-semibold text-2xl">Choose Additional Features</h1>
            <p className="text-center text-zinc-500 text-sm">These are optional yet add advanced features to your token.</p>
          </div>

          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-5">
            {/* Creating a section for additional features that users can use to create more advanced token contracts. */}
            <Accordion variant="splitted" selectionMode="multiple">
              <AccordionItem key="1" aria-label="Mintable" title="Mintable" subtitle="Admin accounts will be allowed to mint more tokens." startContent={<FaLeaf size={25} />} >
                {defaultContent}
              </AccordionItem>
              <AccordionItem key="2" aria-label="Burnable" title="Burnable" subtitle="Allows holders to burn their tokens." startContent={<FaFireAlt size={25} />}>
                {defaultContent}
              </AccordionItem>
              <AccordionItem key="3" aria-label="Pausable" title="Pausable" subtitle="Admin accounts will be able to pause all transfers." startContent={<FaPauseCircle size={25} />}>
                {defaultContent}
              </AccordionItem>
              <AccordionItem key="4" aria-label="Permissable" title="Permissable" subtitle="Allow token holders to authorise third party gas-free transfers." startContent={<FaExchangeAlt size={25} />}>
                {defaultContent}
              </AccordionItem>
              <AccordionItem key="5" aria-label="Flash Minting" title="Flash Minting" subtitle="Allows built-in non-collateral lending as long as tokens returned within the same transaction." startContent={<FaLightbulb size={25} />}>
                {defaultContent}
              </AccordionItem>
            </Accordion>
          </div>
        </form>

        {/* Creating the code preview*/}
        <div className="flex items-center justify-center text-left overflow-x-scroll w-full h-full">
          <div className="w-full p-6 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-[monospace] text-left text-nowrap overflow-x-scroll h-full min-h-[400px]">
            {/* Adding the code to show within the code preview with the line breaks as needed. */}
            {preserveLinebreaks(baseContractTemplate)}
          </div>
        </div>
      </div>
    </div>
  );
}
