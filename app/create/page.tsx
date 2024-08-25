"use client";
import { title } from "@/components/primitives";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";

export default function AboutPage() {
  // Creating the variables for our form inputs.
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [totalSupply, setTotalSupply] = useState(0);
  const [chain, setChain] = useState({key: "ethereum", label: "Ethereum", value: "1"});

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

  // Creating the safety checks for our forms.
  const isValidForSubmission = () => {
    return name && symbol && totalSupply && totalSupply > 0;
  }

  const supplyIsValid = () => {
    return totalSupply > 0;
  }

  return (
    // Main Page Section
    <div className="w-full text-center">
      {/* Page Title */}
      <h1 className={title({ size: "sm" })}>Create Your Token</h1>
      {/* Creating the form wrapper*/}
      <form>
        {/* Name and Symbol Inputs of the Token */}
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-6">
          <Input isRequired type="text" label="Token Name" placeholder="MyToken" size="md" className="text-left" value={name} onChange={e => setName(e.target.value)} />
          <Input isRequired type="text" label="Token Symbol" placeholder="TKN" size="md" className="text-left" value={symbol} onChange={e => setSymbol(e.target.value)} />
        </div>

        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-5">
          {/* Setting the supply and ensuring the supply cannot be a negative number. */}
          <Input isRequired type="number" label="Total Supply" placeholder="MyToken" size="md" className="text-left" value={totalSupply.toString()} onChange={e => setTotalSupply(Number(e.target.value) > 0 ? Number(e.target.value) : 0)} />

          {/* Selecting the Chain */}
          <Select isRequired label="Chain" placeholder="Select a chain" size="md">
            {chains.map((chain) => (
              <SelectItem key={chain.key} value={chain.value}>{chain.label}</SelectItem>
            ))}
          </Select>
        </div>
      </form>
    </div>
  );
}
