from gtts import gTTS # type: ignore
text ="Hello Shreya"
tts=gTTS(text=text, lang='en')
tts.save("hello.mp3")
print("MP3 created successfully!")