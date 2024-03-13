import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
function Price_card({ item }) {
  return (
    <div className="col text-center">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">{item.planName}</h4>
          <h1 className="card-title pricing-card-title">
            ${item.price}/Month
            {/* <small className="text-body-secondary fw-light">/mo</small> */}
          </h1>
        </div>
        <div className="card-body">
          <ul className="list-unstyled mt-3 mb-4">
            {item.feature.map((feat, index) => {
              return (
                <li key={index}>
                  {feat.enable ? (
                    <span>
                      <TiTick />
                      {feat.specify}
                    </span>
                  ) : (
                    <>
                      <ImCross size={9} />
                      <span style={{ opacity: 0.5, padding: 7 }}>
                        {feat.specify}
                      </span>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className={`w-100 btn btn-lg ${
              item.buttonFocus ? `btn-outline-primary1` : `btn-outline-primary`
            }`}
          >
            BUTTON
          </button>
        </div>
      </div>
    </div>
  );
}

export default Price_card;
