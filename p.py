import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(23,GPIO.OUT)
GPIO.setup(16,GPIO.OUT)
for i in range(3):
  GPIO.output(12, GPIO.HIGH)
  time.sleep(0.2)
  GPIO.output(16, GPIO.HIGH)
  time.sleep(0.2)
  GPIO.output(18, GPIO.HIGH)
  time.sleep(0.2)
  GPIO.output(23, GPIO.HIGH)
  time.sleep(0.2)
  GPIO.output(12, GPIO.LOW)
  time.sleep(0.2)
  GPIO.output(16, GPIO.LOW)
  time.sleep(0.2)
  GPIO.output(18, GPIO.LOW)
  time.sleep(0.2)
  GPIO.output(23, GPIO.LOW)
  time.sleep(0.2)


