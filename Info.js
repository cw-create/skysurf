import React from "react";

// these print on to the screen IF AND ONLY IF there is valid input
const Info = (props) => (
    <div className="info-text">
      <div className="col-xs-6 originText">
        {
          props.originCity &&
          props.originCountry &&
          <p className= "originTitle">
            { props.originCity },
            { props.originCountry }
          </p>
        }
        {
          props.originTemp &&
          <p>
            Temperature(°C): It is { props.originTemp } but feels like { props.originOtherTemp }.
          </p>
        }
        {
          props.originHumidity &&
          <p>
            Humidity: { props.originHumidity }%
          </p>
        }
        {
          props.originDescription &&
          <p>
            Conditions: { props.originDescription }
          </p>
        }

      </div> &nbsp;&nbsp;&nbsp;&nbsp;

      <div className="col-xs-6 destinationText">
        {
          props.city &&
          props.country &&
          <p className= "destinationTitle">
            Destination: { props.city }, { props.country }
          </p>
        }
        {
          props.temperature &&
          <p>
            Temperature(°C): It is { props.temperature } but feels like { props.otherTemp }.
          </p>
        }
        {
          props.humidity &&
          <p>
            Humidity: { props.humidity }%
          </p>
        }
        {
          props.description &&
          <p>
            Conditions: { props.description }
          </p>
        }

      </div> &nbsp;&nbsp;&nbsp;&nbsp;

      <div className="routeInfo-text">
        {
          props.route &&
          <p>
            Route: <span dangerouslySetInnerHTML={{ __html: props.route }}/>
          </p>
        }
        {
          props.error &&
          <p>
            { props.error }
          </p>
        }
      </div>
    </div>
);


export default Info;
