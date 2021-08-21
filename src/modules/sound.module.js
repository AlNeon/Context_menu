import { Module } from "../core/module";

export class SoundModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        const randomAudio = Math.floor(Math.random() * 20 + 1);

        let audio = new Audio();
        audio.src = `../../assets/media/s${randomAudio}.wav`;
        audio.autoplay = true;
    }
}