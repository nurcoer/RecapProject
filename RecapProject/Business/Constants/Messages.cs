using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace Business.Constants
{
    public static class Messages
    {
        public static string ProductAdded = "Ürün Eklendi";
        public static string ProductDeleted = "Ürün Silindi";
        public static string ProductUpdated = "Ürün Güncellendi";
        public static string ProductNameInvalid= "Araç adı en az  2 karakterden oluşmalıdır.";
        public static string ProductDailyPriceInvalid= "Bir Aracın günlük fiyatı 0 olamaz. ";

        public static string ListedProduct = "Araçlar Listelendi";
        public static string GetCarDetailMessage = "Araç Detayı Getirildi";
        public static string GetCarsByBrandId = "Markaya Ait Araçlar Getirildi";
        public static string GetCarsByColorId = "Renkte Araçlar Getirildi";

        public static string AddedUser = "Kullanıcı Eklendi";
        public static string UpdatedUser = "Kullanıcı Güncellendi";
        public static string DeletedUser = "Kullanıcı Silindi";


        public static string AddedRental  = "Kiralama Bilgileri Alındı";
        public static string ErrorAddedRental  = "Kiralama Bilgileri Yanlış";

        public static string UpdatedRental = "Kiralama Bilgileri Güncellendi";
        public static string DeletedRental = "Kiralanan Araç Silindi";

        public static string AddedCarImage = "Araç resimleri eklendi";
        public static string DeletedCarImage = "Araç resimleri silindi";
        public static string UpdatedCarImage = "araç resimleri güncellendi";
        public static string MaxCarImage = "Bir araca en fazla tane 5 tane resim ekleyebilirsiniz.";

        public static string AuthorizationDenied = "Yetkiniz yok";

        public static string UserNotFound = "Kullanıcı bulunamadı";
        public static string PasswordError = "Şifre hatalı";
        public static string SuccessfulLogin = "Sisteme giriş başarılı";
        public static string UserAlreadyExists = "Bu kullanıcı zaten mevcut";
        public static string UserRegistered = "Kullanıcı başarıyla kaydedildi";
        public static string AccessTokenCreated = "Access token başarıyla oluşturuldu";

    }
}
