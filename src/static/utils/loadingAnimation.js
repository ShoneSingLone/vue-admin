export function stopLoadingAnimation() {/* 
    let ele = document.getElementById("loading-placeholder");
    if (ele && ele.parentNode) {
        ele.parentNode.removeChild(ele);
    }
    startLoadingAnimation.isStop = true;
    stopLoadingAnimation = null;
 */}
export function startLoadingAnimation(_) {/* 

    const h = document.createElement.bind(document);
    let body = document.body;
    let eleLoading = _.merge(h("div"), {
        id: "loading-placeholder",
        innerHTML: "系统正在加载资源..."
    });

    eleLoading.appendChild(_.merge(h("canvas"), {
        id: "init-canvas",
        style: " bottom: 0; left: 0; margin: auto; position: absolute; right: 0; top: 0; "
    }));
    body.appendChild(eleLoading);
    var canvas = document.getElementById("init-canvas"),
        ctx = canvas.getContext("2d"),
        width = 400,
        height = 100,
        loaded = 0,
        loaderSpeed = 0.6,
        loaderWidth = 310,
        loaderHeight = 16,
        loaderX = width / 2 - loaderWidth / 2,
        loaderY = height / 2 - loaderHeight / 2,
        particles = [],
        particleLift = 180,
        particleRate = 4,
        hueStart = 0,
        hueEnd = 120,
        hue = 0,
        gravity = 0.12,
        dpr = window.devicePixelRatio;
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = (width / dpr) + "px";
    canvas.style.height = (height / dpr) + "px";
    ctx.globalCompositeOperation = "lighter";

    function rand(rMi, rMa) {
        return ~~((Math.random() * (rMa - rMi + 1)) + rMi);
    }

    function updateLoader() {
        if (loaded < 100) {
            loaded += loaderSpeed;
        } else {
            loaded = 0;
        }
    }

    function renderLoader() {
        ctx.fillStyle = "#000";
        ctx.fillRect(loaderX, loaderY, loaderWidth, loaderHeight);
        hue = hueStart + (loaded / 100) * (hueEnd - hueStart);
        var newWidth = (loaded / 100) * loaderWidth;
        ctx.fillStyle = "hsla(" + hue + ", 100%, 40%, 1)";
        ctx.fillRect(loaderX, loaderY, newWidth, loaderHeight);
        ctx.fillStyle = "#444";
        ctx.fillRect(loaderX, loaderY, newWidth, loaderHeight / 2);
    }

    function Particle() {
        this.x = loaderX + ((loaded / 100) * loaderWidth) - rand(0, 1);
        this.y = height / 2 + rand(0, loaderHeight) - loaderHeight / 2;
        this.vx = (rand(0, 4) - 2) / 100;
        this.vy = (rand(0, particleLift) - particleLift * 2) / 100;
        this.width = rand(1, 4) / 2;
        this.height = rand(1, 4) / 2;
        this.hue = hue;
    }

    Particle.prototype.update = function (i) {
        this.vx += (rand(0, 6) - 3) / 100;
        this.vy += gravity;
        this.x += this.vx;
        this.y += this.vy;

        if (this.y > height) {
            particles.splice(i, 1);
        }
    };

    Particle.prototype.render = function () {
        ctx.fillStyle = "hsla(" + this.hue + ", 100%, " + rand(50, 70) + "%, " + rand(20, 100) / 100 + ")";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    function createParticles() {
        var i = particleRate;
        while (i--) {
            particles.push(new Particle());
        }
    }

    function updateParticles() {
        var i = particles.length;
        while (i--) {
            var p = particles[i];
            p.update(i);
        }
    }

    function renderParticles() {
        var i = particles.length;
        while (i--) {
            var p = particles[i];
            p.render();
        }
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, width, height);
    }

    function loop() {
        if (startLoadingAnimation.isStop) {
            startLoadingAnimation = null;
        } else {
            // console.log('loop count', loop.count++);
            requestAnimationFrame(loop);
            clearCanvas();
            createParticles();
            updateLoader();
            updateParticles();
            renderLoader();
            renderParticles();
        }
    }
    loop.count = 0;
    // loop();
 */}