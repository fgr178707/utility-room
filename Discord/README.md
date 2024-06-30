#### 放点杂物看看就好啦🤣🤣🤣
----------
### Discord模组插件
[VencordInstaller安装包](/Discord/VencordInstaller.exe)

[VencordInstaller官网](https://vencord.dev/) **认准当前网站**

### [插件列表][1]
[1]:https://vencord.dev/plugins
### 推荐插件


|名称|简称| 本人已安装
| :-|:-|:-
|[CustomRPC][1]|必安装|✅
|[fakeNitro][2] |不用购买Nitro! 也能获得Nitro!一样的功能|✅
|[NSFWGateBypass][3]|允许您在不设置/验证您的年龄的情况下访问 18+ 频道|✅
|[ReadAllNotificationsButton][4]|只需单击一个按钮，即可读取所有服务器通知！|✅
|[EmoteCloner][5]|允许您将表情和贴纸克隆到您自己的服务器（右键单击它们）|❌
|[BetterFolders][6]|在侧边栏显示服务器文件夹，并添加与文件夹相关的改进功能|❌
|[SilentTyping][7]|隐藏您正在输入的内容|✅
|[NoReplyMention][8]|默认情况下禁用回复 @|❌
|[ImageZoom][9]|让你放大图片和 gif。使用滚轮放大，使用 shift + 滚轮增大镜头半径/尺寸|✅
|[Translate][10]|使用 Google 翻译翻译信息|❌ 
|[FixYoutubeEmbeds][11]|绕过 Youtube 视频在 Discord 上被阻止显示的情况（例如被 UMG 阻止）|❌
|[MaskedLinkPaste][12]|在选中文本时粘贴链接，类似Markdown文字链接|❌
|[NoOnboardingDelay][13]|跳过缓慢而烦人的入职延迟|❌
|[ReplaceGoogleSearch][13]|用不同的引擎搜索|❌

[1]:https://vencord.dev/plugins/CustomRPC
[2]:https://vencord.dev/plugins/FakeNitro
[3]:https://vencord.dev/plugins/NSFWGateBypass
[4]:https://vencord.dev/plugins/ReadAllNotificationsButton
[5]:https://vencord.dev/plugins/EmoteCloner
[6]:https://vencord.dev/plugins/BetterFolders
[7]:https://vencord.dev/plugins/SilentTyping
[8]:https://vencord.dev/plugins/NoReplyMention
[9]:https://vencord.dev/plugins/ImageZoom
[10]:https://vencord.dev/plugins/Translate
[11]:https://vencord.dev/plugins/FixYoutubeEmbeds
[12]:https://vencord.dev/plugins/MaskedLinkPaste]
[13]:https://vencord.dev/plugins/ReplaceGoogleSearch


## 完成最近的 Discord 任务
<details>
<summary><code><strong>点击展开(翻译)</strong></code></summary>

 	这在浏览器中不再有效！

    如果您一个人在 vc 中，此功能将无法使用！必须有其他人加入！
    现在有两种任务类型（"流 "和 "玩"）！请注意相关说明！

如何使用此脚本：
1. 在用户设置 -> 礼品库存下接受任务
2. 按 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd> 打开 DevTools
3. 转到 "控制台 "选项卡
4. 粘贴以下代码并点击回车：




<details>
<summary><code><strong>点击展开</strong></code></summary>

```js
let wpRequire;
window.webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => { wpRequire = req; }]);

let ApplicationStreamingStore, RunningGameStore, QuestsStore, ExperimentStore, FluxDispatcher, api
if(window.GLOBAL_ENV.SENTRY_TAGS.buildId === "366c746173a6ca0a801e9f4a4d7b6745e6de45d4") {
	ApplicationStreamingStore = Object.values(wpRequire.c).find(x => x?.exports?.default?.getStreamerActiveStreamMetadata).exports.default;
	RunningGameStore = Object.values(wpRequire.c).find(x => x?.exports?.default?.getRunningGames).exports.default;
	QuestsStore = Object.values(wpRequire.c).find(x => x?.exports?.default?.getQuest).exports.default;
	ExperimentStore = Object.values(wpRequire.c).find(x => x?.exports?.default?.getGuildExperiments).exports.default;
	FluxDispatcher = Object.values(wpRequire.c).find(x => x?.exports?.default?.flushWaitQueue).exports.default;
	api = Object.values(wpRequire.c).find(x => x?.exports?.getAPIBaseURL).exports.HTTP;
} else {
	ApplicationStreamingStore = Object.values(wpRequire.c).find(x => x?.exports?.Z?.getStreamerActiveStreamMetadata).exports.Z;
	RunningGameStore = Object.values(wpRequire.c).find(x => x?.exports?.ZP?.getRunningGames).exports.ZP;
	QuestsStore = Object.values(wpRequire.c).find(x => x?.exports?.Z?.getQuest).exports.Z;
	ExperimentStore = Object.values(wpRequire.c).find(x => x?.exports?.Z?.getGuildExperiments).exports.Z;
	FluxDispatcher = Object.values(wpRequire.c).find(x => x?.exports?.Z?.flushWaitQueue).exports.Z;
	api = Object.values(wpRequire.c).find(x => x?.exports?.tn?.get).exports.tn;
}

let quest = [...QuestsStore.quests.values()].find(x => x.id !== "1245082221874774016" && x.userStatus?.enrolledAt && !x.userStatus?.completedAt && new Date(x.config.expiresAt).getTime() > Date.now())
let isApp = navigator.userAgent.includes("Electron/")
if(!isApp) {
	console.log("This no longer works in browser. Use the desktop app!")
} else if(!quest) {
	console.log("You don't have any uncompleted quests!")
} else {
	const pid = Math.floor(Math.random() * 30000) + 1000
	
	let applicationId, applicationName, secondsNeeded, secondsDone, canPlay
	if(quest.config.configVersion === 1) {
		applicationId = quest.config.applicationId
		applicationName = quest.config.applicationName
		secondsNeeded = quest.config.streamDurationRequirementMinutes * 60
		secondsDone = quest.userStatus?.streamProgressSeconds ?? 0
		canPlay = quest.config.variants.includes(2)
	} else if(quest.config.configVersion === 2) {
		applicationId = quest.config.application.id
		applicationName = quest.config.application.name
		canPlay = ExperimentStore.getUserExperimentBucket("2024-04_quest_playtime_task") > 0 && quest.config.taskConfig.tasks["PLAY_ON_DESKTOP"]
		const taskName = canPlay ? "PLAY_ON_DESKTOP" : "STREAM_ON_DESKTOP"
		secondsNeeded = quest.config.taskConfig.tasks[taskName].target
		secondsDone = quest.userStatus?.progress?.[taskName]?.value ?? 0
	}

	if(canPlay) {
		api.get({url: `/applications/public?application_ids=${applicationId}`}).then(res => {
			const appData = res.body[0]
			const exeName = appData.executables.find(x => x.os === "win32").name.replace(">","")
			
			const games = RunningGameStore.getRunningGames()
			const fakeGame = {
				cmdLine: `C:\\Program Files\\${appData.name}\\${exeName}`,
				exeName,
				exePath: `c:/program files/${appData.name.toLowerCase()}/${exeName}`,
				hidden: false,
				isLauncher: false,
				id: applicationId,
				name: appData.name,
				pid: pid,
				pidPath: [pid],
				processName: appData.name,
				start: Date.now(),
			}
			games.push(fakeGame)
			FluxDispatcher.dispatch({type: "RUNNING_GAMES_CHANGE", removed: [], added: [fakeGame], games: games})
			
			let fn = data => {
				let progress = quest.config.configVersion === 1 ? data.userStatus.streamProgressSeconds : Math.floor(data.userStatus.progress.PLAY_ON_DESKTOP.value)
				console.log(`Quest progress: ${progress}/${secondsNeeded}`)
				
				if(progress >= secondsNeeded) {
					console.log("Quest completed!")
					
					const idx = games.indexOf(fakeGame)
					if(idx > -1) {
						games.splice(idx, 1)
						FluxDispatcher.dispatch({type: "RUNNING_GAMES_CHANGE", removed: [fakeGame], added: [], games: []})
					}
					FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn)
				}
			}
			FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn)
			
			console.log(`Spoofed your game to ${applicationName}. Wait for ${Math.ceil((secondsNeeded - secondsDone) / 60)} more minutes.`)
		})
	} else {
		let realFunc = ApplicationStreamingStore.getStreamerActiveStreamMetadata
		ApplicationStreamingStore.getStreamerActiveStreamMetadata = () => ({
			id: applicationId,
			pid,
			sourceName: null
		})
		
		let fn = data => {
			let progress = quest.config.configVersion === 1 ? data.userStatus.streamProgressSeconds : Math.floor(data.userStatus.progress.STREAM_ON_DESKTOP.value)
			console.log(`Quest progress: ${progress}/${secondsNeeded}`)
			
			if(progress >= secondsNeeded) {
				console.log("Quest completed!")
				
				ApplicationStreamingStore.getStreamerActiveStreamMetadata = realFunc
				FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn)
			}
		}
		FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn)
		
		console.log(`Spoofed your stream to ${applicationName}. Stream any window in vc for ${Math.ceil((secondsNeeded - secondsDone) / 60)} more minutes.`)
		console.log("Remember that you need at least 1 other person to be in the vc!")
	}
}
```
</details>

5. 根据您的任务类型，按照印刷说明进行操作
    - 如果你的任务说要 "玩 "游戏，你可以什么都不做，只是等待
    - 如果您的任务要求 "串流 "游戏，请与朋友或助手加入 VC，并在任何窗口串流游戏。

7. 等待 15 分钟
8. 现在您可以在用户设置 -> 礼品库存中领取奖励！

您可以通过查看控制台选项卡中的 "任务进度："打印，或重新打开设置中的 "礼物清单 "选项卡来跟踪进度。

## FAQ

**问: Ctrl + Shift + I不起作用**

答：要么下载 [ptb 客户端](https://discord.com/api/downloads/distributions/app/installers/latest?channel=ptb&platform=win&arch=x64)，要么使用 [this](https://www.reddit.com/r/discordapp/comments/sc61n3/comment/hu4fw5x/) 在稳定版上启用 DevTools。


**问：我收到一条错误消息“未经授权”**

答：Discord 已对该脚本进行了修补，使其无法在浏览器中运行。请使用桌面应用程序，或者查找一些可以更改用户代理的扩展，并在其中任意位置添加 "Electron/"字符串。

他们还开始检查有多少人加入了虚拟气候，因此请确保至少用另外一个账户加入。


**问：我遇到了不同的错误**

答：请确保您正确复制/粘贴了脚本，并完成了所有步骤。

</details>

<details>
<summary><code><strong>点击展开(原文)</strong></code></summary>

NOTE

    This no longer works in browser!

    This no longer works if you're alone in vc! Somebody else has to join you!

WARNING

    There are now two quest types ("stream" and "play")! Pay attention to the instructions!

How to use this script:
1. Accept a quest under User Settings -> Gift Inventory
2. Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd> to open DevTools
3. Go to the `Console` tab
4. Paste the following code and hit enter:

<details>
<summary><code><strong>Click to expand</strong></code></summary>
	
```js
let wpRequire;
window.webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => { wpRequire = req; }]);

let ApplicationStreamingStore, RunningGameStore, QuestsStore, ExperimentStore, FluxDispatcher, api
if(window.GLOBAL_ENV.SENTRY_TAGS.buildId === "366c746173a6ca0a801e9f4a4d7b6745e6de45d4") {
	ApplicationStreamingStore = Object.values(wpRequire.c).find(x => x?.exports?.default?.getStreamerActiveStreamMetadata).exports.default;
	RunningGameStore = Object.values(wpRequire.c).find(x => x?.exports?.default?.getRunningGames).exports.default;
	QuestsStore = Object.values(wpRequire.c).find(x => x?.exports?.default?.getQuest).exports.default;
	ExperimentStore = Object.values(wpRequire.c).find(x => x?.exports?.default?.getGuildExperiments).exports.default;
	FluxDispatcher = Object.values(wpRequire.c).find(x => x?.exports?.default?.flushWaitQueue).exports.default;
	api = Object.values(wpRequire.c).find(x => x?.exports?.getAPIBaseURL).exports.HTTP;
} else {
	ApplicationStreamingStore = Object.values(wpRequire.c).find(x => x?.exports?.Z?.getStreamerActiveStreamMetadata).exports.Z;
	RunningGameStore = Object.values(wpRequire.c).find(x => x?.exports?.ZP?.getRunningGames).exports.ZP;
	QuestsStore = Object.values(wpRequire.c).find(x => x?.exports?.Z?.getQuest).exports.Z;
	ExperimentStore = Object.values(wpRequire.c).find(x => x?.exports?.Z?.getGuildExperiments).exports.Z;
	FluxDispatcher = Object.values(wpRequire.c).find(x => x?.exports?.Z?.flushWaitQueue).exports.Z;
	api = Object.values(wpRequire.c).find(x => x?.exports?.tn?.get).exports.tn;
}

let quest = [...QuestsStore.quests.values()].find(x => x.id !== "1245082221874774016" && x.userStatus?.enrolledAt && !x.userStatus?.completedAt && new Date(x.config.expiresAt).getTime() > Date.now())
let isApp = navigator.userAgent.includes("Electron/")
if(!isApp) {
	console.log("This no longer works in browser. Use the desktop app!")
} else if(!quest) {
	console.log("You don't have any uncompleted quests!")
} else {
	const pid = Math.floor(Math.random() * 30000) + 1000
	
	let applicationId, applicationName, secondsNeeded, secondsDone, canPlay
	if(quest.config.configVersion === 1) {
		applicationId = quest.config.applicationId
		applicationName = quest.config.applicationName
		secondsNeeded = quest.config.streamDurationRequirementMinutes * 60
		secondsDone = quest.userStatus?.streamProgressSeconds ?? 0
		canPlay = quest.config.variants.includes(2)
	} else if(quest.config.configVersion === 2) {
		applicationId = quest.config.application.id
		applicationName = quest.config.application.name
		canPlay = ExperimentStore.getUserExperimentBucket("2024-04_quest_playtime_task") > 0 && quest.config.taskConfig.tasks["PLAY_ON_DESKTOP"]
		const taskName = canPlay ? "PLAY_ON_DESKTOP" : "STREAM_ON_DESKTOP"
		secondsNeeded = quest.config.taskConfig.tasks[taskName].target
		secondsDone = quest.userStatus?.progress?.[taskName]?.value ?? 0
	}

	if(canPlay) {
		api.get({url: `/applications/public?application_ids=${applicationId}`}).then(res => {
			const appData = res.body[0]
			const exeName = appData.executables.find(x => x.os === "win32").name.replace(">","")
			
			const games = RunningGameStore.getRunningGames()
			const fakeGame = {
				cmdLine: `C:\\Program Files\\${appData.name}\\${exeName}`,
				exeName,
				exePath: `c:/program files/${appData.name.toLowerCase()}/${exeName}`,
				hidden: false,
				isLauncher: false,
				id: applicationId,
				name: appData.name,
				pid: pid,
				pidPath: [pid],
				processName: appData.name,
				start: Date.now(),
			}
			games.push(fakeGame)
			FluxDispatcher.dispatch({type: "RUNNING_GAMES_CHANGE", removed: [], added: [fakeGame], games: games})
			
			let fn = data => {
				let progress = quest.config.configVersion === 1 ? data.userStatus.streamProgressSeconds : Math.floor(data.userStatus.progress.PLAY_ON_DESKTOP.value)
				console.log(`Quest progress: ${progress}/${secondsNeeded}`)
				
				if(progress >= secondsNeeded) {
					console.log("Quest completed!")
					
					const idx = games.indexOf(fakeGame)
					if(idx > -1) {
						games.splice(idx, 1)
						FluxDispatcher.dispatch({type: "RUNNING_GAMES_CHANGE", removed: [fakeGame], added: [], games: []})
					}
					FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn)
				}
			}
			FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn)
			
			console.log(`Spoofed your game to ${applicationName}. Wait for ${Math.ceil((secondsNeeded - secondsDone) / 60)} more minutes.`)
		})
	} else {
		let realFunc = ApplicationStreamingStore.getStreamerActiveStreamMetadata
		ApplicationStreamingStore.getStreamerActiveStreamMetadata = () => ({
			id: applicationId,
			pid,
			sourceName: null
		})
		
		let fn = data => {
			let progress = quest.config.configVersion === 1 ? data.userStatus.streamProgressSeconds : Math.floor(data.userStatus.progress.STREAM_ON_DESKTOP.value)
			console.log(`Quest progress: ${progress}/${secondsNeeded}`)
			
			if(progress >= secondsNeeded) {
				console.log("Quest completed!")
				
				ApplicationStreamingStore.getStreamerActiveStreamMetadata = realFunc
				FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn)
			}
		}
		FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn)
		
		console.log(`Spoofed your stream to ${applicationName}. Stream any window in vc for ${Math.ceil((secondsNeeded - secondsDone) / 60)} more minutes.`)
		console.log("Remember that you need at least 1 other person to be in the vc!")
	}
}
```
</details>

5. Follow the printed instructions depending on what type of quest you have
    - If your quest says to "play" the game, you can just wait and do nothing
    - If your quest says to "stream" the game, join a vc with a friend or alt and stream any window
7. Wait for 15 minutes
8. You can now claim the reward in User Settings -> Gift Inventory!

You can track the progress by looking at the `Quest progress:` prints in the Console tab, or by reopening the Gift Inventory tab in settings.

## FAQ

**Q: Ctrl + Shift + I doesn't work**

A: Either download the [ptb client](https://discord.com/api/downloads/distributions/app/installers/latest?channel=ptb&platform=win&arch=x64), or use [this](https://www.reddit.com/r/discordapp/comments/sc61n3/comment/hu4fw5x/) to enable DevTools on stable


**Q: I get an error saying "Unauthorized"**

A: Discord has patched the script from working in browsers. Use the desktop app, or alternatively find some extension which lets you change your User-Agent and append the string `Electron/` anywhere in it.

They have also started checking how many people are in the vc, so make sure you join it on at least 1 other account.


**Q: I get a different error**

A: Make sure you're copy/pasting the script correctly and that you've have done all the steps.

</details>

视频教程:https://www.youtube.com/watch?v=MV33-XB0gss

文章出自于:https://gist.github.com/aamiaa/204cd9d42013ded9faf646fae7f89fbb