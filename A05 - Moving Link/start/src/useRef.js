import { useRef } from 'react';

export default function useMovement() {
    const canvasRef = useRef(null);
    const linkDownRef = useRef(null);
    const linkUpRef = useRef(null);
    const linkLeftRef = useRef(null);
    const linkRightRef = useRef(null);


    return { canvasRef, linkDownRef, linkUpRef, linkLeftRef, linkRightRef }
}