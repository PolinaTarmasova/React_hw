import './Main.css'
import React from 'react';
import { useState } from 'react';
import { allMovieLibrary, addMovie, removeMovie, findMovie, filmographyMovie } from '../../movie_library/movies_functions';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import P from '../../components/P/P';

export default function Main() {
    const [showAll, setShowAll] = useState("");
    const [formType, setFormType] = useState<string | null>(null);
    const [addInput, setAddInput] = useState({
        name: "",
        genre: "",
        part: "",
        actors: ""
    });
    const [outputData, setOutputData] = useState("");

    const handleInputChange = (field: keyof typeof addInput) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddInput(prev => ({
            ...prev,
            [field]: event.target.value
        }));
    };

    const addAnInput = (value: string) => {
        if (value === "showAll") {
            setFormType(null);
            const result = allMovieLibrary();
            setShowAll(result);
            setOutputData(result);
        } else {
            setFormType(value);
            setOutputData("");
        }
    }

    const addData = (value: string) => {
        switch (value) {
            case "add":
                const addResult = addMovie(addInput);
                setOutputData(addResult);
                setAddInput({
                    name: "",
                    genre: "",
                    part: "",
                    actors: ""
                });
                break;
            case "remove":
                const removeResult = removeMovie(addInput.name, Number(addInput.part));
                setOutputData(removeResult);
                break;
            case "show":
                const findResult = findMovie(addInput.name);
                setOutputData(findResult || "Фильм не найден");
                break;
            case "movieography":
                const filmographyResult = filmographyMovie(addInput.name);
                setOutputData(filmographyResult);
                break;
        }
    }

    const renderForm = () => {
        switch (formType) {
            case "add":
                return (
                    <div className='inputBlocks'>
                        <Input
                            placeholderText='название фильма'
                            value={addInput.name}
                            onChange={handleInputChange('name')}
                        />
                        <Input
                            placeholderText='жанр фильма'
                            value={addInput.genre}
                            onChange={handleInputChange('genre')}
                        />
                        <Input
                            placeholderText='часть фильма'
                            value={addInput.part}
                            onChange={handleInputChange('part')}
                        />
                        <Input
                            placeholderText='актёры'
                            value={addInput.actors}
                            onChange={handleInputChange('actors')}
                        />
                        <Select />
                        <Button
                            className="buttonSecondStep"
                            click={() => addData("add")}
                            buttonText="ОК"
                        />
                    </div>
                );
            case "remove":
                return (
                    <div className='inputBlocks'>
                        <Input
                            placeholderText='название фильма'
                            value={addInput.name}
                            onChange={handleInputChange('name')}
                        />
                        <Input
                            placeholderText='часть фильма'
                            value={addInput.part}
                            onChange={handleInputChange('part')}
                        />
                        <Button
                            className="buttonSecondStep"
                            click={() => addData("remove")}
                            buttonText="ОК"
                        />
                    </div>
                );
            case "show":
                return (
                    <div className='inputBlocks'>
                        <Input
                            placeholderText='название фильма'
                            value={addInput.name}
                            onChange={handleInputChange('name')}
                        />
                        <Button
                            className="buttonSecondStep"
                            click={() => addData("show")}
                            buttonText="ОК"
                        />
                    </div>
                );
            case "movieography":
                return (
                    <div className='inputBlocks'>
                        <Input
                            placeholderText='имя актёра'
                            value={addInput.name}
                            onChange={handleInputChange('name')}
                        />
                        <Button
                            className="buttonSecondStep"
                            click={() => addData("movieography")}
                            buttonText="ОК"
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <main className='reactMain'>
            <div className='reactMain_buttons'>
                <div className='showAllMovie'>
                    <Button
                        className="buttonFirstStep"
                        click={() => addAnInput("showAll")}
                        buttonText="Вывести все фильмы"
                    />
                </div>
                <div className='addMovie'>
                    <Button
                        className="buttonFirstStep"
                        click={() => addAnInput("add")}
                        buttonText="Добавить фильм"
                    />
                </div>
                <div className='removeMovie'>
                    <Button
                        className="buttonFirstStep"
                        click={() => addAnInput("remove")}
                        buttonText="Удалить фильм"
                    />
                </div>
                <div className='showMovie'>
                    <Button
                        className="buttonFirstStep"
                        click={() => addAnInput("show")}
                        buttonText="Найти фильм"
                    />
                </div>
                <div className='showMovieography'>
                    <Button
                        className="buttonFirstStep"
                        click={() => addAnInput("movieography")}
                        buttonText="Показать фильмографию"
                    />
                </div>
            </div>
            <div className='reactMain_inputs'>
                {renderForm()}
            </div>
            <div className='reactMain_pullUpData'>
                <P data={outputData} />
            </div>
        </main>
    );
}