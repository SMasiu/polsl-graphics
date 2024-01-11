using System.Drawing;
using Emgu;
using Emgu.CV;
using Emgu.CV.Structure;
using System.Windows;

namespace Zad5
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            Image<Bgr, byte> img = new Image<Bgr, byte>("C:\\Users\\szymo\\Desktop\\image.jpg");
            Image<Gray, byte> img2 = img.Convert<Gray, byte>();
            Image<Gray, Single> img_final = (img2.Sobel(1, 0, 5));

            CvInvoke.Imshow("Image", img_final);
            CvInvoke.Imshow("Image2", img2);
            CvInvoke.WaitKey(0);
        }
    }
}