import { ResultType } from "types/result";

import "./styles.scss";

const Result = ({ result }: { result: ResultType }) => {
  return (
    <div className="Result">
      <div className="row">
        <div className="label">ID:</div>
        <div className="value">{result.id}</div>
      </div>
      <div className="row">
        <div className="label">HCP:</div>
        <div className="value">{result.hcp}</div>
      </div>
      <div className="row">
        <div className="label">Scratch:</div>
        <div className="value">{result.scratch}</div>
      </div>
      <div className="row">
        <div className="label">Hits:</div>
        <div className="value">{result.hits}</div>
      </div>
      <div className="row">
        <div className="label">To Par HCP:</div>
        <div className="value">{result.to_par_hcp}</div>
      </div>
      <div className="row">
        <div className="label">To Par Scratch:</div>
        <div className="value">{result.to_par_scratch}</div>
      </div>
      <div className="row">
        <div className="label">Stableford HCP:</div>
        <div className="value">{result.stableford_hcp}</div>
      </div>
      <div className="row">
        <div className="label">Stableford Scratch:</div>
        <div className="value">{result.stableford_scratch}</div>
      </div>
      <div className="row">
        <div className="label">Hole:</div>
        <div className="value">{result.hole}</div>
      </div>
    </div>
  );
};

export default Result;
