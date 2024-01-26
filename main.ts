from microbit import *

# パドルの初期位置
paddle_x = 2

# ボールの初期位置と速度
ball_x = 2
ball_y = 2
ball_dx = 1
ball_dy = 1

while True:
    # パドルを表示
display.set_pixel(paddle_x, 4, 9)

    # ボールを表示
display.set_pixel(ball_x, ball_y, 9)

    # パドルを左右に動かす
if button_a.is_pressed() and paddle_x > 0:
paddle_x -= 1
elif button_b.is_pressed() and paddle_x < 4:
paddle_x += 1

    # ボールの移動
ball_x += ball_dx
ball_y += ball_dy

    # ボールが壁に当たったら反射
if ball_x == 0 or ball_x == 4:
ball_dx = -ball_dx

    # ボールが上部に当たったら反射
if ball_y == 0:
    ball_dy = -ball_dy

    # ボールがパドルに当たったら反射
if ball_y == 4 and ball_x == paddle_x:
ball_dy = -ball_dy

    # ボールが下部に到達したらゲームオーバー
if ball_y == 4:
    display.scroll("Game Over!")
break

    # 少し待機して描画が見やすくなる
sleep(100)
display.clear()
