import { useState, useEffect, useCallback } from 'react';


export default function useTrivia() {

    const [category, setCategory] = useState("any")
    const [question, setQuestion] = useState(null)


    const getQuestion = useCallback(() => {
        const categoryParam = (category !== "any") ? `&category=${category}` : ""
        fetch(`https://opentdb.com/api.php?amount=1${categoryParam}`)
            .then(res => res.json())
            .then(data => setQuestion(data.results[0]));

    }, [category])

    useEffect(() => {
        getQuestion()
    }, [category, getQuestion])


    return { question, getQuestion, category, setCategory };
}