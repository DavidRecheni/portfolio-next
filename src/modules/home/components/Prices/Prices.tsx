import Badge from "./Badge/Badge";

const Prices = () => {
  return (
    <div className="flex gap-8">
      <Badge
        title="Winner"
        description="Urbit challenge"
        event={{ name: "NFT Berlin'22", url: "https://2022.nftberlin.org/" }}
      />
      <Badge
        title="Winner"
        description="1st Place"
        event={{ name: "ETH Zurich'23", url: "https://ethereumzuri.ch/" }}
      />
    </div>
  );
};

export default Prices;
