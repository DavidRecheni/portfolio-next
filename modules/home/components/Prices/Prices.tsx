import Badge from "./Badge/Badge";
import nftberlin from "../../../../public/images/nftberlin.svg";
import ethzurich from "../../../../public/images/ethzurich.jpg";
const Prices = () => {
  return (
    <div className="flex gap-8 items-start">
      <Badge
        image={nftberlin}
        title="Winner"
        description="Urbit challenge"
        event={{ name: "NFT Berlin'22", url: "https://2022.nftberlin.org/" }}
      />
      <Badge
        image={ethzurich}
        title="Winner"
        description="1st Place"
        event={{ name: "ETH Zurich'23", url: "https://ethereumzuri.ch/" }}
      />
    </div>
  );
};

export default Prices;
