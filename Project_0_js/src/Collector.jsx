import "./style.css"
import { useState } from "react";
import { CreateButton, CreateOkButton } from "./components/buttons/Button";
import { addMovie, removeMovie, findMovie, filmographyMovie, allMovieLibrary } from "./filmLibrary/workWithFunc"
import CreateInput from "./components/inputs/Input/"
import CreateP from "./components/p/p";

export default function Collector() {
  const [buttonClass, setButtonClass] = useState("");
  const [inputTextOne, setInputTextOne] = useState("");
  const [inputTextTwo, setInputTextTwo] = useState("");
  const [inputTextThree, setInputTextThree] = useState("");
  const [inputTextFour, setInputTextFour] = useState("");
  const [inputTextFive, setInputTextFive] = useState("");
  const [inputTextSix, setInputTextSix] = useState("");
  const [inputTextSeven, setInputTextSeven] = useState("");
  const [inputTextEigth, setInputTextEigth] = useState("");
  const [selectOptions, setInputSelect] = useState("");
  const [text, setText] = useState("");

  function KindButton(buttonClass) {
    setButtonClass(buttonClass);
    if(buttonClass === "allMovies"){
      let textAllMovieLibrary = allMovieLibrary();
      setText(textAllMovieLibrary);
    }
  }
  function FindTextInput(func, event) {
    func(event.target.value);
  }
  function FindSelect(event) {
    setInputSelect(event.target.value);
  }
  function CreateMovieObj() {
    return {
      movieName: inputTextOne,
      movieGenre: inputTextTwo,
      moviePart: inputTextThree,
      movieActors: inputTextFour.split(","),
      movieReview: selectOptions,
    };
  }
  function StartWorkOK(buttonClass) {
    switch (buttonClass) {
      case "add":
        const newMovie = CreateMovieObj();
        let textAddMovie = addMovie(newMovie);
        setText(textAddMovie);
        break;
      case "remove":
        let textRemoveMovie = removeMovie(inputTextFive, inputTextSix);
        setText(textRemoveMovie);
        break;
      case "find":
        let textFindMovie = findMovie(inputTextSeven);
        setText(textFindMovie);
        break;
      case "filmography":
        let textFilmographyMovie = filmographyMovie(inputTextEigth);
        setText(textFilmographyMovie);
        break;
      default:
        break;
    }
  }

  function CreateNewInput(buttonClass) {
    switch (buttonClass) {
      case "add":
        return (
          <div class="input_block_elem">
            <CreateInput inputHint={"Напишите название фильма"}
              value={inputTextOne}
              onChange={(event) => FindTextInput(setInputTextOne, event)}>
            </CreateInput>
            <CreateInput inputHint={"Напишите название жанра"}
              value={inputTextTwo}
              onChange={(event) => FindTextInput(setInputTextTwo, event)}>
            </CreateInput>
            <CreateInput inputHint={"Напишите номер части"}
              value={inputTextThree}
              onChange={(event) => FindTextInput(setInputTextThree, event)}>
            </CreateInput>
            <CreateInput inputHint={"Напишите имена актёров через запятую"}
              value={inputTextFour}
              onChange={(event) => FindTextInput(setInputTextFour, event)}>
            </CreateInput>
            <select value={selectOptions} onChange={FindSelect}>
              <option value="">---Вам понравился фильм?---</option>
              <option value="true">Да</option>
              <option value="false">Нет</option>
            </select>
            <CreateOkButton className="add" onClick={() => StartWorkOK("add")}></CreateOkButton>
          </div>
        )
      case "remove":
        return (
          <div className="input_block_elem">
            <CreateInput inputHint={"Напишите название фильма"}
              value={inputTextFive}
              onChange={(event) => FindTextInput(setInputTextFive, event)}>
            </CreateInput>
            <CreateInput inputHint={"Напишите номер части"}
              value={inputTextSix}
              onChange={(event) => FindTextInput(setInputTextSix, event)}>
            </CreateInput>
            <CreateOkButton className="remove" onClick={() => StartWorkOK("remove")}></CreateOkButton>
          </div>
        )
      case "find":
        return (
          <div className="input_block_elem">
            <CreateInput inputHint={"Напишите название фильма"}
              value={inputTextSeven}
              onChange={(event) => FindTextInput(setInputTextSeven, event)}>
            </CreateInput>
            <CreateOkButton className="find" onClick={() => StartWorkOK("find")}></CreateOkButton>
          </div>
        )
      case "filmography":
        return (
          <div className="input_block_elem">
            <CreateInput inputHint={"Напишите имя актёра"}
              value={inputTextEigth}
              onChange={(event) => FindTextInput(setInputTextEigth, event)}>
            </CreateInput>
            <CreateOkButton className="filmography" onClick={() => StartWorkOK("filmography")}></CreateOkButton>
          </div>
        )
      default:
        break;
    }
  }

  return (
    <div className="all">
      <div className="buttons_block">
        <div className="add">
          <CreateButton onClick={() => KindButton("add")}>Добавить</CreateButton>
        </div>
        <div className="remove">
          <CreateButton onClick={() => KindButton("remove")}>Удалить</CreateButton>
        </div>
        <div className="find">
          <CreateButton onClick={() => KindButton("find")}>Найти</CreateButton>
        </div>
        <div className="filmography">
          <CreateButton onClick={() => KindButton("filmography")}>Фильмография</CreateButton>
        </div>
        <div className="allMovies">
          <CreateButton onClick={() => KindButton("allMovies")}>Посмотреть весь список</CreateButton>
        </div>
      </div>
      <div className="input_block">
        {CreateNewInput(buttonClass)}
      </div>
      <div className="result_block">
        <CreateP information={text}></CreateP>
      </div>
    </div>
  )
}
