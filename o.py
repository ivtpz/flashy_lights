import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(12,GPIO.OUT)
GPIO.setup(23,GPIO.OUT)

for i in range(2):
  GPIO.output(12,GPIO.HIGH)
  time.sleep(0.2)
  GPIO.output(12,GPIO.LOW)
  GPIO.output(23,GPIO.HIGH)
  time.sleep(0.1)
  GPIO.output(23,GPIO.LOW)
  GPIO.output(12,GPIO.HIGH)
  time.sleep(1)
  GPIO.output(12,GPIO.LOW)
  GPIO.output(23,GPIO.HIGH)
  time.sleep(2)
  GPIO.output(23,GPIO.LOW)
  GPIO.output(12,GPIO.HIGH)
  time.sleep(2)
  GPIO.output(12,GPIO.LOW)
  GPIO.output(23,GPIO.HIGH)
  time.sleep(0.5)
  GPIO.output(23,GPIO.LOW)
  GPIO.output(12,GPIO.HIGH)
  time.sleep(0.2)
  GPIO.output(12,GPIO.LOW)
  GPIO.output(23,GPIO.HIGH)
  time.sleep(0.1)
  GPIO.output(23,GPIO.LOW)




