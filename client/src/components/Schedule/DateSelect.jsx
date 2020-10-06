import React from 'react';
import UserInput from './UserInput.jsx'
import styled from 'styled-components';

const SliderContainer = styled.div`
    position: relative;
    outline: none;
    box-sizing: border-box;
    display: block;
`;

const Slider = styled.div`
    overflow: hidden;
    padding: 4px;
    margin: -4px;
    outline: none;
    box-sizing: border-box;
    display: block;
`;

const Carousel = styled.div`
    transform: translateX(0%);
    flex-wrap: nowrap;
    transition: transform 0.45s ease 0s;
    display: flex;
    margin-left: -4px;
    margin-right: -4px;
    margin-top: -8px;
    outline: none;
    box-sizing: border-box;

`;

const DateButtonContainer = styled.div`
    border-style: solid;
    border-color: transparent;
    border-width: 8px 4px 0px;
    width: 25%;
    flex: 0 0 auto;
    display: block;
    outline: none;
    box-sizing: border-box;

`;

const Button = styled.button`
    margin: 0px;
    border-radius: 8px;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
    white-space: nowrap;
    font-size: 14px;
    line-height: 1.43;
    padding: 8px;
    width: 100%;
    font-weight: normal;
    color: rgb(59, 65, 68);
    background-color: rgb(255, 255, 255);
    border: 2px solid transparent;
    box-shadow: rgb(205, 209, 212) 0px 0px 0px 1px;
    font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
    outline: none;

    &:hover {
    color: rgb(59, 65, 68);
    background-color: rgb(245, 246, 247);
    border: 2px solid transparent;
    box-shadow: rgb(205, 209, 212) 0px 0px 0px 1px;
    margin: 0px;
    border-radius: 8px;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
    white-space: nowrap;
    font-size: 14px;
    line-height: 1.43;
    padding: 8px;
    width: 100%;
    font-weight: normal;
    }


    &:active {
    color: rgb(59, 65, 68);
    background-color: rgb(255, 255, 255);
    border: 2px solid transparent;
    box-shadow: rgb(0, 173, 187) 0px 0px 0px 2px;
    margin: 0px;
    border-radius: 8px;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
    white-space: nowrap;
    font-size: 14px;
    line-height: 1.43;
    padding: 8px;
    width: 100%;
    font-weight: normal;
    }

    &:focus {

    }

`;

const ButtonDiv = styled.div`
    border-style: solid;
    border-color: transparent;
    border-width: 8px 4px 0px;
    transition: visibility 0s linear 0.45s;

`;

const ButtonDiv1 = styled.div`
    font-weight: bold;
    font-size: 20px;
    line-height: 1.2;
    border-style: solid;
    border-color: transparent;
    border-width: 8px 4px 0px;
    transition: visibility 0s linear 0.45s;

`;

const ArrowDivNext = styled.div`
    position: absolute;
    right: -16px;
    top: calc(50% - 16px);
    outline: none;
    box-sizing: border-box;
    display: block;
`;

const ArrowDivPrevious = styled.div`
    position: absolute;
    z-index: 1;
    left: -16px;
    top: calc(50% - 16px);
    outline: none;
    box-sizing: border-box;
    display: block;
`;


const ArrowButton = styled.button`
   transition: box-shadow 0.1s ease 0s, color 0.1s ease 0s, border-color 0.2s ease 0s, background-color 0.2s ease 0s;
    border-radius: 24px;
    padding: 1px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: pointer;
    width: 32px;
    height: 32px;
    border: 1px solid rgb(232, 233, 234);
    background-color: rgb(255, 255, 255);
    font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    outline: none;
    box-sizing: border-box;
    appearance: button;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(buttontext, rgb(170, 170, 170));
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
`;

const ArrowInnderDiv = styled.div`
    flex: 1 1 0%;
    display: inline-block;
    font-size: 0px;
    width: 24px !important;
    height: 24px !important;
`;


class DateSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: '',
      isNext: true,
    };
    this.onClickedDate = this.onClickedDate.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  onClickedDate(event) {
    this.setState({selectedDate: event.currentTarget.value});
  }

  handleNext() {
    const slider = document.getElementsByClassName('slider')[0];
    slider.style.transform = `translateX(-100%)`
    this.setState({isNext: false})
  }

  handlePrev() {
    const slider = document.getElementsByClassName('slider')[0];
    slider.style.transform = `translateX(0%)`
    this.setState({isNext: true})
  }

  render() {
    // return (
    //   <div>
    //     Date Select
    //     <form>
    //       <select onChange={this.onClickedDate} multiple>
    //         {this.props.days.map((day, index) => {
    //           return (
    //             <option key={index} value={day}>{day}</option>
    //           );
    //         }
    //         )}
    //       </select>
    //     </form>
    //     <UserInput visitType={this.props.type} selectedDate={this.state.selectedDate}/>
    //   </div>
    // );font-weight:'bold' font-size: '20px' line-height:'1.2'
    return (
      <div>
      <SliderContainer>
        <Slider>
          <Carousel spacing="tight" className="slider" style={{transform: 'translateX(0%)'}}>
              {this.props.days.map((day, index) => {
              return (
                <DateButtonContainer key={index} width="24%,24%,24%,19.2%,25%">
              <Button onClick={this.onClickedDate}  value={day}>
                <ButtonDiv width="24%,24%,24%,19.2%,25%">{day.substring(0, 3)}</ButtonDiv>
                <ButtonDiv1 >
                  {day.substring(5, 7)}
                </ButtonDiv1>
                <ButtonDiv>{day.substring(day.length - 3)}</ButtonDiv>
              </Button>
                </DateButtonContainer>
              );
            }
            )}
          </Carousel>
        </Slider>

        {this.state.isNext && (

        <ArrowDivNext>
          <ArrowButton onClick={this.handleNext}>
            <ArrowInnderDiv>
            <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z" fill="#869099"></path></svg>
            </ArrowInnderDiv>
          </ArrowButton>
        </ArrowDivNext>

        )}

        {!this.state.isNext && (
        <ArrowDivPrevious>
          <ArrowButton onClick={this.handlePrev}>
            <ArrowInnderDiv>
            <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z" fill="#869099"></path></svg>
            </ArrowInnderDiv>
          </ArrowButton>
        </ArrowDivPrevious>

        )}

     </SliderContainer>
     <br></br>
     <div>
       <UserInput visitType={this.props.type} selectedDate={this.state.selectedDate}/>
     </div>
      </div>
    );
  }
}


export default DateSelect;

{/* <div spacing="tight" class="Grid__GridContainer-sc-5ig2n4-1 cbPcEc ResponsiveSlider__ScrollContainer-r9x57u-2 kwKde" style="transform: translateX(0%);">
  <div width="24%,24%,24%,19.2%,25%" class="Grid__CellBox-sc-5ig2n4-0 jhuhAj ResponsiveSlider__ScrollItem-r9x57u-6 blsZYU"><button type="button" data-testid="schedule-tour-date-option0" class="ButtonBase-c2s2ot-0 ScheduleTourButton-mwkado-0 eAKPoq"><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 fOTDnX">Fri</div><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 jXLtij">2</div><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 fOTDnX">Oct</div></button></div><div width="24%,24%,24%,19.2%,25%" class="Grid__CellBox-sc-5ig2n4-0 jhuhAj ResponsiveSlider__ScrollItem-r9x57u-6 blsZYU"><button type="button" data-testid="schedule-tour-date-option1" class="ButtonBase-c2s2ot-0 ScheduleTourButton-mwkado-0 eAKPoq"><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 fOTDnX">Sat</div><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 jXLtij">3</div><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 fOTDnX">Oct</div></button></div><div width="24%,24%,24%,19.2%,25%" class="Grid__CellBox-sc-5ig2n4-0 jhuhAj ResponsiveSlider__ScrollItem-r9x57u-6 blsZYU"><button type="button" data-testid="schedule-tour-date-option2" class="ButtonBase-c2s2ot-0 ScheduleTourButton-mwkado-0 eAKPoq"><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 fOTDnX">Sun</div><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 jXLtij">4</div><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 fOTDnX">Oct</div></button></div><div width="24%,24%,24%,19.2%,25%" class="Grid__CellBox-sc-5ig2n4-0 jhuhAj ResponsiveSlider__ScrollItem-r9x57u-6 blsZYU"><button type="button" data-testid="schedule-tour-date-option3" class="ButtonBase-c2s2ot-0 ScheduleTourButton-mwkado-0 bvSZxc"><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 fOTDnX">Mon</div><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 jXLtij">5</div><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 fOTDnX">Oct</div></button></div><div width="24%,24%,24%,19.2%,25%" class="Grid__CellBox-sc-5ig2n4-0 jhuhAj ResponsiveSlider__ScrollItem-r9x57u-6 jnLylv"><button type="button" data-testid="schedule-tour-date-option4" class="ButtonBase-c2s2ot-0 ScheduleTourButton-mwkado-0 eAKPoq"><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 fOTDnX">Tue</div><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 jXLtij">6</div><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 fOTDnX">Oct</div></button></div><div width="24%,24%,24%,19.2%,25%" class="Grid__CellBox-sc-5ig2n4-0 jhuhAj ResponsiveSlider__ScrollItem-r9x57u-6 jnLylv"><button type="button" data-testid="schedule-tour-date-option5" class="ButtonBase-c2s2ot-0 ScheduleTourButton-mwkado-0 eAKPoq"><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 fOTDnX">Wed</div><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 jXLtij">7</div><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 fOTDnX">Oct</div></button></div><div width="24%,24%,24%,19.2%,25%" class="Grid__CellBox-sc-5ig2n4-0 jhuhAj ResponsiveSlider__ScrollItem-r9x57u-6 jnLylv"><button type="button" data-testid="schedule-tour-date-option6" class="ButtonBase-c2s2ot-0 ScheduleTourButton-mwkado-0 eAKPoq"><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 fOTDnX">Thu</div><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 jXLtij">8</div><div class="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 fOTDnX">Oct</div></button></div></div> */}