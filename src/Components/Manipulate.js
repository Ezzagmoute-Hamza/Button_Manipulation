import { useSelector, useDispatch } from "react-redux";
import {
  ChangeIconForbutton,
  ChangeBgColorForbutton,
  ChangeValueof_buttonTextContent,
  ToDisableButton,
  ToActiveButton,
  allinfo,
  IncreaseInputNumber,

} from "./StoreAndReducer/Reducer";

import { buttonColors, allIcons } from "./data";
export default function Manipulate() {
  const { buttonTextContent, Icon, bgColor, toActive, toDisable,inputValue } = useSelector(
    (state) => state.btnreducer
  );
  const dispatch = useDispatch();
  // this function will change buttonTextcontent.
  const toChangebuttontextcontent = (e) => {
    dispatch(ChangeValueof_buttonTextContent(e.target.value));
  };

  const IncreaseInputnbr = (e) => {
    dispatch(IncreaseInputNumber(e.target.value));
  };
  // this function will dispatch the action to add object of information to the LastData property
  const addtolastData = () => {
    // dispatch(IncreaseElements(e.target.value));
    dispatch(
      allinfo({
        color: bgColor,
        text: buttonTextContent,
        icon: Icon,
        active: toActive,
        disable: toDisable,
      })
    );
  };

  //   const numberofelementsinwillbeInlist=()=>{
  //     dispatch(numberofElements());
  // }
  //   this function will change bgColor of the button
  const toChangeBgColor = (e) => {
    dispatch(ChangeBgColorForbutton(e.target.value));
    console.log(Icon, bgColor);
  };
  //   this function will change the button Icon
  const toChangeButtonIcon = (e) => {
    dispatch(ChangeIconForbutton(e.target.value));
    console.log(Icon, bgColor);
  };
  // this function can make the button enabled or disabled
  const toDisabledOrEnabled = () => {
    dispatch(ToDisableButton());
  };
  // this function will add class Active or will remove it
  const toActiveorDisactive = () => {
    dispatch(ToActiveButton());
  };
  // I made these two variable just to add them to the selectbox  options
  const addToColorsOptions = "btn btn-";
  const addToIconsOptions = "bi bi-";
  // this function capilatize the first letter from a word or sentence
  const capitalizer = (str) => {
    let mystring = str.toLowerCase();
    return mystring.charAt(0).toUpperCase() + mystring.slice(1);
  };
  // this function return some Color as options to add then to the selectbox
  const getButtoncolors = buttonColors.map((ele,index) => {
    return (
      <option value={addToColorsOptions + ele + " rounded"} key={index}>
        {capitalizer(ele)}
      </option>
    );
  });

  // this function return some icons name to add them to the selectbox of Icons
  const getButtonIcons = allIcons.map((ele,index) => {
    return <option value={addToIconsOptions + ele} key={index}>
    {capitalizer(ele)}
    </option>;
  });

  return (
    <>
      <div class="col-sm-6 col-md-4 col-xl">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text rounded-0 rounded-start">Valeur</span>
          </div>
          <input
            type="text"
            class="form-control"
            defaultValue={buttonTextContent}
            onChange={toChangebuttontextcontent}
          />
        </div>
      </div>

      <div class="col-sm-6 col-md-4 col-xl">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text rounded-0 rounded-start">Style</span>
          </div>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={toChangeBgColor}
          >
            <option value={"btn btn-light rounded"}>Default</option>
            {getButtoncolors}
          </select>
        </div>
      </div>

      <div class="col-sm-6 col-md-4 col-xl">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text rounded-0 rounded-start">Icon</span>
          </div>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={toChangeButtonIcon}
          >
            <option value={"bi bi-question-circle"}>Default</option>
            {getButtonIcons}
          </select>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-xl">
        <div class=" p-1 mb-3 border text-center">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
              onChange={toActiveorDisactive}
            />
            <label class="form-check-label" for="inlineCheckbox1">
              Active
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
              onChange={toDisabledOrEnabled}
            />
            <label class="form-check-label" for="inlineCheckbox2">
              Disabled
            </label>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-6 col-xl">
        <div class="input-group mb-3">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span
                class="btn btn-primary rounded-0 rounded-start"
                onClick={addtolastData}
              >
                create
              </span>
            </div>
            <input
              type="number"
              class="form-control"
              defaultValue={inputValue}
              min="1"
              max="10"
              onChange={IncreaseInputnbr}
            />
            {/* onChange={IncreaseTotal} */}
            <div class="input-group-prepend">
              <span class="input-group-text bg-primary text-white rounded-0 rounded-end">
                Button(s)
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
