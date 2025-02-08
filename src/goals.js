import CheckboxBtn from './images/icons/checkbox-btn';

//List of club goals for the year
const Goals = () => {
  return (
    <div className="goals-container nav" id="goals">
      <div className="goals">
        <ul>
          <h3>2024-2025 Milestones</h3>
          <li>
            <span className="ibm">01.</span>
            <span> Donate to Boyce Eden’s Fund.</span>
            <CheckboxBtn />
          </li>
          <li>
            <span className="ibm">02.</span>
            <span>Donate to Barbara Burde Fund and Booster donations.</span>
            <CheckboxBtn />
          </li>
          <li>
            <span className="ibm">03.</span>
            <span>Donate to Tinari Endowment Fund.</span>
            <CheckboxBtn />
          </li>
          <li>
            <span className="ibm">04.</span>
            <span>Members donate plants for Fall and Spring Sales.</span>
            <CheckboxBtn />
          </li>
          <li>
            <span className="ibm">05.</span>
            <span>Donate to state and national shows.</span>
            <CheckboxBtn />
          </li>
          <li>
            <span className="ibm">06.</span>
            <span>Participate in Best Varieties List.</span>
            <CheckboxBtn />
          </li>
          <li>
            <span className="ibm">07.</span>
            <span>
              Provide AVSA literature and information at shows and sales.
            </span>
            <CheckboxBtn />
          </li>
          <li>
            <span className="ibm">08.</span>
            <span>Attend and participate in the National AVSA Convention.</span>
            <CheckboxBtn />
          </li>
          <li>
            <span className="ibm">09.</span>
            <span>Attend and participate in the LSAVC meetings/shows.</span>
            <CheckboxBtn />
          </li>
          <li>
            <span className="ibm">10.</span>
            <span>Strive for 100% AVSA membership.</span>
            <CheckboxBtn />
          </li>
          <li>
            <span className="ibm">11.</span>
            <span>Share information and growing experiences with others.</span>
            <CheckboxBtn />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Goals;
