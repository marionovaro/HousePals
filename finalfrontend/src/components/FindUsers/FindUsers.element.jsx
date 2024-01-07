import styled from "@emotion/styled";

export const FindUserStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  border: 4px solid #72cc89;
  border-radius: 10px;
  #userFinderContainer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 7vw;
    width: 100%;
    background-color: #72cc89;;
  }
  #userFinderInput{
  border-radius: 20px;
  border: 1px solid black;
  height: 50%;
  width: 30%;
  }
  #findUsersButton{
    height: 35px;
    width: 35px;
    border-radius: 50%;
    border: 2px solid black;
    background-color: transparent;
  }
  #padreSection{
    width: 100%;
  }

  .findUserMapResult:first-child{
    border-top: 1px solid grey;
    
  }

  .findUserMapResult{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    width: 100%;
    border-bottom: 1px solid grey;
  }

  .findUserMapSection{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1vw;
  }

  .userFinderImage{
    width: 7vw;
    height: 7vw;
    object-fit: cover;
    border-radius: 50%;
  }

  .userFinderName{
    font-size: 20px;
  }

  .addRoommateButton{
    border-radius: 5px;
    background-color: #72cc89;
    color: white;
    font-weight: 700;
    font-size: 1.3vw;
  }
`