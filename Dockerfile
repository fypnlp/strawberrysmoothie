FROM reactnativecommunity/react-native-android:4.0
RUN mkdir -p /awesomeApp
ADD . /awesomeApp
WORKDIR /awesomeApp
RUN yarn global add detox-cli
RUN yarn global add envinfo && envinfo
RUN yarn global add concurrently
RUN yarn
# RUN echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf && sysctl -p
RUN mkdir -p /root/.android && touch /root/.android/repositories.cfg
# CMD ["sdkmanager" ,"--list"]
# RUN echo yes | $ANDROID_HOME/tools/bin/sdkmanager --licenses
# RUN echo yes | $ANDROID_HOME/tools/bin/sdkmanager --licenses && $ANDROID_HOME/tools/bin/sdkmanager "platforms;android-28" "build-tools;28.0.3"
RUN echo yes | $ANDROID_HOME/tools/bin/sdkmanager --licenses && $ANDROID_HOME/tools/bin/sdkmanager --channel=0 --verbose "system-images;android-30;google_apis;x86_64"
RUN echo no | $ANDROID_HOME/tools/bin/avdmanager --verbose create avd --force --name "Pixel_4_API_30" --package "system-images;android-30;google_apis;x86_64" --sdcard 200M --device 11
RUN echo "Waiting emulator is ready..."
# RUN $ANDROID_HOME/tools/bin/emulator -avd Pixel_4_API_30 -no-audio -no-window -no-boot-anim -no-snapshot -no-window &
# RUN adb wait-for-device shell 'while [[ -z $(getprop sys.boot_completed) ]]; do sleep 1; done; input keyevent 82'
# RUN adb start-server
RUN echo "Emulator is ready!"
# RUN yarn start
RUN detox build -c android:emulator
# CMD [ "yarn" ,"start"]
CMD concurrently "yarn start" "sleep 25 && detox test -c android:emulator --headless -l trace"
# RUN detox test -c android:emulator --headless -l trace