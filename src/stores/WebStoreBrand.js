import { defineStore } from "pinia";

const localStorageKeyName = "scssecoBrandCartItems";

const addCartToLocalStorage = (cart) => {
  localStorage.setItem(localStorageKeyName, JSON.stringify(cart));
};

export const useWebStoreBrand = defineStore("WebStoreStore", {
  state: () => ({
    products: [],
    cart: [],
    cartItems: 0,
    cartTotal: 0,
    loading: true,
  }),
  getters: {},
  actions: {
    productsFetch() {
      const fetchTheProducts = async () => {
        try {
          const getProducts = await fetch("https://dummyjson.com/products");

          if (!getProducts.ok) {
            throw Error();
          }

          let res = await getProducts.json();

          res.products.forEach((product) => {
            product.cartQuantity = 0;
          });

          this.products = res.products;

          this.products[0].stock = 0;
          this.products[5].stock = 0;

          this.loading = false;

          if (
            localStorage.getItem(localStorageKeyName) === null ||
            JSON.parse(localStorage.getItem(localStorageKeyName)).length == 0
          )
            return;

          const localCart = [...JSON.parse(localStorage.getItem(localStorageKeyName))];

          // this.cartItems = localCart.length;

          localCart.forEach((cartItem) => {
            this.cartItems += cartItem.cartQuantity;
            // console.log(cartItem.cartQuantity);

            this.products.filter((product) => {
              if (product.id == cartItem.id) {
                product.cartQuantity = cartItem.cartQuantity;
              }
            });
            if (cartItem.cartQuantity > 0) {
              this.cartTotal += cartItem.price * cartItem.cartQuantity;
            } else {
              this.cartTotal += cartItem.price;
            }
          });
        } catch (err) {
          console.log(err);
        }
      };

      fetchTheProducts();
    },
    cartFetch() {
      if (localStorage.getItem(localStorageKeyName) === null) return;
      const cart = JSON.parse(localStorage.getItem(localStorageKeyName));
      this.cart = cart;
    },
    addToBag(id) {
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === id) {
          return;
        }
      }

      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === id && this.products[i].stock === 0) {
          return;
        }
      }

      const productToBag = this.products.filter((product) => {
        if (product.id === id) {
          console.log("as");
          this.cartItems++;
          this.cartTotal += product.price;
        }

        return product.id === id;
      });

      this.products.forEach((product) => {
        if (product.id == id) {
          product.cartQuantity++;
        }
      });

      this.cart.push(productToBag[0]);

      addCartToLocalStorage(this.cart);
    },
    increaseQuantity(id) {
      this.products.forEach((product) => {
        if (product.id == id) {
          this.cartItems++;
          product.cartQuantity++;
        }
      });

      this.cart.forEach((cartItem) => {
        if (cartItem.id == id) {
          cartItem.cartQuantity++;

          this.cartTotal += cartItem.price;
        }
      });

      addCartToLocalStorage(this.cart);
    },
    decreaseQuantity(id) {
      this.products.forEach((product) => {
        if (product.id == id && product.cartQuantity > 0) {
          this.cartItems--;
          product.cartQuantity--;
          this.cartTotal -= product.price;
        }

        if (product.id == id && product.cartQuantity == 0) {
          this.cartItems--;
          this.cart = this.cart.filter((cartItem) => {
            if (cartItem.id != id) {
              return cartItem;
            }
          });
        }
      });

      this.cart.forEach((cartItem) => {
        if (cartItem.id == id && cartItem.cartQuantity > 0) {
          cartItem.cartQuantity--;

          // this.cartTotal -= cartItem.price;
        }
      });

      addCartToLocalStorage(this.cart);
    },
    removeItemFromCart(id) {
      this.products.forEach((product) => {
        if (product.id == id) {
          this.cart = this.cart.filter((cartItem) => {
            if (cartItem.id != id) {
              return cartItem;
            }
            if (cartItem.cartQuantity > 0) {
              this.cartTotal -= cartItem.price * cartItem.cartQuantity;
              this.cartItems = this.cartItems - cartItem.cartQuantity;
            } else {
              this.cartTotal -= cartItem.price;
            }
          });

          product.cartQuantity = 0;
        }
      });

      addCartToLocalStorage(this.cart);
    },
    removeAllItemsFromCart() {
      console.log("remove");
      this.cart = [];
      this.cartItems = 0;
      this.cartTotal = 0;
      this.products.filter((product) => {
        product.cartQuantity = 0;
      });
      localStorage.removeItem(localStorageKeyName);
    },
  },
});
