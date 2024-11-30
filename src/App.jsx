import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
import { Sidebar, Navbar } from "./components/index";

const App = () => {
  useEffect(() => {
    document.title = "Crowdfunding Project - Powered by Web3 & Smart Contracts";

    // Meta Description
    const metaDescription = document.querySelector("meta[name='description']");
    const descriptionContent =
      "Discover and support innovative crowdfunding projects on our decentralized platform powered by Web3 and smart contracts. Transparent, secure, and efficient!";
    if (metaDescription) {
      metaDescription.setAttribute("content", descriptionContent);
    } else {
      const newMetaDescription = document.createElement("meta");
      newMetaDescription.name = "description";
      newMetaDescription.content = descriptionContent;
      document.head.appendChild(newMetaDescription);
    }

    // Meta Keywords
    const metaKeywords = document.querySelector("meta[name='keywords']");
    const keywordsContent =
      "Crowdfunding, Web3, Smart Contracts, Blockchain, Ethereum, Fundraising, Decentralized Platform, Crypto Projects, NFT Crowdfunding, Transparent Funding";
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywordsContent);
    } else {
      const newMetaKeywords = document.createElement("meta");
      newMetaKeywords.name = "keywords";
      newMetaKeywords.content = keywordsContent;
      document.head.appendChild(newMetaKeywords);
    }

    // Meta Author
    const metaAuthor = document.querySelector("meta[name='author']");
    const authorContent = "BINTANGMFHD";
    if (metaAuthor) {
      metaAuthor.setAttribute("content", authorContent);
    } else {
      const newMetaAuthor = document.createElement("meta");
      newMetaAuthor.name = "author";
      newMetaAuthor.content = authorContent;
      document.head.appendChild(newMetaAuthor);
    }

    // Meta Robots (Optional for SEO)
    const metaRobots = document.querySelector("meta[name='robots']");
    const robotsContent = "index, follow";
    if (!metaRobots) {
      const newMetaRobots = document.createElement("meta");
      newMetaRobots.name = "robots";
      newMetaRobots.content = robotsContent;
      document.head.appendChild(newMetaRobots);
    }
  }, []);

  return (
    <div className="relative sm:-8 p-4 bg-[#131318] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
