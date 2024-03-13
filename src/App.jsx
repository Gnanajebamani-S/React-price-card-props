import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Price_card from "./card";
function App() {
  let data = [
    {
      planName: "FREE",
      price: 0,
      feature: [
        {
          specify: "Single User",
          enable: true,
        },
        {
          specify: "50GB Storage",
          enable: true,
        },
        {
          specify: "Unlimited Public Project",
          enable: true,
        },
        {
          specify: "Comunity Acess",
          enable: true,
        },
        {
          specify: "Unlimited Private Projects",
          enable: false,
        },
        {
          specify: "Dedicated Phone Support",
          enable: false,
        },
        {
          specify: "Free Subdomain",
          enable: false,
        },
        {
          specify: "Monthly Status Report",
          enable: false,
        },
      ],
      buttonFocus: false,
    },
    {
      planName: "PLUS",
      price: 9,
      feature: [
        {
          specify: "5 User",
          enable: true,
        },
        {
          specify: "50GB Storage",
          enable: true,
        },
        {
          specify: "Unlimited Public Project",
          enable: true,
        },
        {
          specify: "Comunity Acess",
          enable: true,
        },
        {
          specify: "Unlimited Private Projects",
          enable: true,
        },
        {
          specify: "Dedicated Phone Support",
          enable: true,
        },
        {
          specify: "Free Subdomain",
          enable: true,
        },
        {
          specify: "Monthly Status Report",
          enable: false,
        },
      ],
      buttonFocus: false,
    },
    {
      planName: "PRO",
      price: 49,
      feature: [
        {
          specify: "Unlimited User",
          enable: true,
        },
        {
          specify: "50GB Storage",
          enable: true,
        },
        {
          specify: "Unlimited Public Project",
          enable: true,
        },
        {
          specify: "Comunity Acess",
          enable: true,
        },
        {
          specify: "Unlimited Private Projects",
          enable: true,
        },
        {
          specify: "Dedicated Phone Support",
          enable: true,
        },
        {
          specify: "Free Subdomain",
          enable: true,
        },
        {
          specify: "Monthly Status Report",
          enable: true,
        },
      ],
      buttonFocus: true,
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => {
          return <Price_card item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
